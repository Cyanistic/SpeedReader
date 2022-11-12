import PySimpleGUI as sg
import logging
import time

sg.theme('dark grey 9')
layout = [
        [sg.Text("Input Text"), sg.Input(key="inputText")], 
        [sg.Text("Word Speed (WPM)"), sg.Input(key="inputRate"),sg.Button("Start", key="startButton")],
        [sg.Text("Balls", justification="center", key="resultText")]
        ]

window = sg.Window("Speedreader", layout, size = (800, 400))
wordCache = 0
while True:

    if wordCache:
        window["resultText"].update(words[len(words)-wordCache])
        wordCache -=1
        time.sleep(rate)
        continue

    event, values = window.read(timeout=100)

    if event == sg.WINDOW_CLOSED:
        break

    elif event == "startButton":
        try:
            words = values["inputText"].split(" ")
            rate = 60 / int(values["inputRate"])
        except ValueError:
            window["resultText"].update("Error, invalid rate")
            print("Error, invalid rate!")
        except:
            logging.exception("")
            window["resultText"].update("Error, something went wrong")
            print("Error, something went wrong")
        wordCache = len(words)


window.close()
