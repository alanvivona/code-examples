import socket
import sys

''' simple tcp/udp client
    example:
    - client.py localhost 99 udp hello
    - run nc -lu 99 to check connections
 '''

def createClient(conType:str) -> socket:
    if (conType is not None ) & (conType == 'udp') :
        conType = socket.SOCK_DGRAM
    else :
        conType = socket.SOCK_STREAM
    return socket.socket(socket.AF_INET, conType)

# default values or command line arguments
if len(sys.argv) == 5 :
    message = sys.argv[4].encode('utf-8')
    clientType = sys.argv[3]
    port = int(sys.argv[2])
    host = sys.argv[1]
else:
    message = b'test message'
    clientType = 'tcp'
    port = 80
    host = 'localhost'

client = createClient(clientType)

sentData = 0
receivedData = None

try:
    if clientType == 'tcp':
        client.connect((host, port))
        sentData = client.send(message)
        receivedData = client.recv(4096)
    else:
        client.sendto(message,(host, port))
        sentData = len(message)
        receivedData, addr = client.recvfrom(4096)
    
except ConnectionRefusedError as err:
    print('Connection error ocurred')
finally:
    print('Sent bytes: ', sentData)
    print('Received message: ', receivedData)