use crate::core_structs::invoice::*;

mod core_structs;
mod utils;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![create_invoice])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
