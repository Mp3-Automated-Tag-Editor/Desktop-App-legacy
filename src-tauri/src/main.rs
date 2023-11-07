// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::{Connection, Result};
use std::collections::HashMap;
use id3::{Tag, TagLike};
use std::fs;

#[derive(Debug)]
struct Cat {
    name: String,
    color: String,
}

fn main() {
    tauri::Builder::default()
        // .run(tauri::generate_context!())
        // .expect("error while running tauri application");
        .invoke_handler(tauri::generate_handler![set_db])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

#[tauri::command(rename_all = "snake_case")]
async fn set_db(path_var: String) -> Result<(), ()> {
    let _ = db_build().await;
    let _ = db_populate(path_var).await;
    Ok(())
}

async fn db_populate(path_var: String) -> Result<()> {
    let paths = fs::read_dir(path_var.clone()).unwrap();
    let conn = Connection::open(".userdata/Mp3data.db")?;

    for path in paths {
        // let tag = Tag::read_from_path(path.as_ref())?;
        let file_name = path.as_ref().unwrap().file_name();
        let path_value = path.as_ref().unwrap().path();
        
        //Dont send into DB until API request has been made, then send ALL data. After that, send result to frontend - if successfull - begin preview screen, else show error

        let _ = conn.execute("INSERT INTO mp3_table_data (
            file_name, 
            path, 
            title, 
            artist, 
            album, 
            year, 
            track, 
            genre,
            comment, 
            album_artist, 
            composer, 
            discno, 
            successfulFieldCalls,
            successfulMechanismCalls,
            successfulQueries,
            totalFieldCalls,
            totalMechanismCalls,
            totalSuccessfulQueries,
            album_art
        ) VALUES (
            ?1,
            ?2,
            NULL,
            NULL,
            NULL,
            0,
            0,
            NULL,
            NULL,
            NULL,
            NULL,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            NULL
        )",(file_name.into_string().unwrap(), path_value.to_str().unwrap()));
    }

    println!("Path Variable: {}", path_var);
    Ok(())
}

async fn db_build() -> Result<()> {
    let conn = Connection::open(".userdata/Mp3data.db")?;

    let _ = conn.execute(
        "create table if not exists mp3_table_data (
             id INTEGER PRIMARY KEY, 
             file_name TEXT not null unique, 
             path TEXT not null unique, 
             title TEXT, 
             artist TEXT, 
             album TEXT, 
             year NUMBER, 
             track NUMBER, 
             genre TEXT, 
             comment TEXT, 
             album_artist TEXT, 
             composer TEXT, 
             discno NUMBER, 
             successfulFieldCalls NUMBER,
             successfulMechanismCalls NUMBER,
             successfulQueries NUMBER,
             totalFieldCalls NUMBER,
             totalMechanismCalls NUMBER,
             totalSuccessfulQueries NUMBER,
             album_art TEXT
         )",
        (), // &[&path_var.to_string()]
    );

    println!("Created Table");

    Ok(())
}

// #[tauri::command(rename_all = "snake_case")]
// async fn start_search(path_var: String) {
//   println!("Path Variable: {}", path_var);
// }
