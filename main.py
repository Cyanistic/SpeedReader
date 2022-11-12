import PySimpleGUI as sg


sg.theme('dark grey 9')
layout = [
        [sg.Text("Input Text"), sg.Input(key="inputText")], 
        [sg.Text("Word Speed (WPM)"), sg.Input(key="inputRate"),sg.Button("Start", key="startButton")],
        [sg.Text("Balls", justification="center")]
        ]

window = sg.Window("Speedreader", layout, size = (800, 400))

while True:

    event, values = window.read()

    if event == sg.WINDOW_CLOSED:
        break

    elif event == "startButton":
        pass

window.close()
