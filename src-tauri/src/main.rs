// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;

fn main() {
    tauri::Builder::default()
        // .run(tauri::generate_context!())
        // .expect("error while running tauri application");
        .invoke_handler(tauri::generate_handler![set_dir])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

#[tauri::command(rename_all = "snake_case")]
fn set_dir(path_var: String) {
    

    let paths = fs::read_dir(path_var.clone()).unwrap();

    for path in paths {
        println!("Name: {}", path.unwrap().path().display())
    }

    println!("Path Variable: {}", path_var);

    //Set each path-path_var (just song name) + song in DB
    //DB struct: song_name | path | title | artist | album | year | track | genre | comments | albumArtist | composer | discno | successfulFieldCalls | successfulMechanismCalls | successfulQueries | totalFieldCalls | totalMechanismCalls | totalSuccessfulQueries
}

// #[tauri::command(rename_all = "snake_case")]
// async fn start_search(path_var: String) {
//   println!("Path Variable: {}", path_var);
// }
