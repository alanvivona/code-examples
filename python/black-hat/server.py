import socket
import sys
import threading

def createServer(port:int, threads=5) -> socket:
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(("127.0.0.1", port))
    server.listen(threads)
    return server

def handleClient(clientSocket:socket):
    received = clientSocket.recv(1024)
    print('Received data', received)
    clientSocket.send('hello')
    clientSocket.close()

port = 99
server = createServer(port)
while True:
    clientConnection, clientAddr = server.accept()
    print('Incoming connection from', clientAddr)
    clientHandler = threading.Thread(target=handleClient, args=(clientConnection,))
    clientHandler.start()


    



