import threading
from tkinter import *
import webview
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Start HTTP server
PORT = 80  # Use a different port since 80 often requires admin privileges

def start_http_server():
    """Starts the HTTP server in a separate thread."""
    with HTTPServer(("", PORT), SimpleHTTPRequestHandler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

# Create a thread for the HTTP server
server_thread = threading.Thread(target=start_http_server)
server_thread.start()
#subprocess.Popen("python -m http.server 80")

# Create an instance of tkinter
tk = Tk()

# Size of the window where we show our website
tk.geometry("800x450")

# Open website
webview.create_window('Clock', 'http://127.0.0.1/index.html')

# Start WebView loop
webview.start()

# Start the Tkinter mainloop
tk.mainloop()