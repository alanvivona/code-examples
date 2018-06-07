# The else clause does not execute if the loop terminates some other way (through a break statement or by raising an exception):
for i in range(2):
    print(i)
    if i == 1:
    break
else:
    print('done')

# Looping and Unpacking MAGIC!!
collection = [('a', 'b', 'c'), ('x', 'y', 'z'), ('1', '2', '3')]
for i1, i2, i3 in collection:
    # logic

