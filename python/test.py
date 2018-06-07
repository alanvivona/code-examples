# SHELLS
#   Interactive shell : python -i
#   Execute commands : python -c 'print("Hello, World")'

# Variables don't need separate declaration
# Variables need to be initialized (None values is valid)
# Dynamic types as in js

print("Hello, World")

# null/nill => None with NoneType
null = None
print(null)
print(type(null))

# Unpacking : Convention use _ for unnecesary variables
a, b, _ = 1, 2, 3
print(a, b)

y = [7, 8, 9]
x = [1, 2, [3, 4, 5], 6, 7]

# Identation
v1 = 0
v2 = 3
if(v1>v2) :
    print("v1 wins!")
else :
    print("v2 wins!")

# ----- Data types -----

# Booleans
true = True
false = False

print(true and true)
print(true and false)
print(true or false)
print(not true)

# booleans as aritmentic values
print(true + true)
print(false * true)

# Integers
# There's no long integer data type in python3, integers are of arbitrary sizes (please check this)
int_num = 10 #int value
float_num = 10.2 #float value
complex_num = 3.14j #complex value
long_num = 1234567L #long value

# Float
# Presition depends on implementation and system architecture

# Strings
# str : a unicode string. The type of 'hello'
# bytes : a byte string. The type of b'hello'

# There's only one string type !! 
c = 'A'
print(type(c))
# Output: <type 'str'>
name = 'John Doe'
print(type(name))
# Output: <type 'str'>

# Strings can be accessed like this
a_str = 'Hello World'
print(a_str[0]) #output will be first character. H
print(a_str[0:5]) #output will be first five characters. Hello

# Sets
# are mutable 

#Frozen sets
# same shit but immutable
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket) # duplicates will be removed > {'orange', 'banana', 'pear', 'apple'}
a = set('abracadabra')
print(a) # unique letters in a > {'a', 'r', 'b', 'c', 'd'}

# Lists
print(list[0:2]) #will output first two element of list
print(list1 * 2) #will gave list1 two times. ['hello','world','hello','world']
print(list + list1) #will gave concatenation of both lists.

# Dictionary (key-value pairs)
dic={'name':'red','age':10}
print(dic) #will output all the key-value pairs. {'name':'red','age':10}
print(dic['name']) #will output only value with 'name' key. 'red'
print(dic.values()) #will output list of values in dic. ['red',10]
print(dic.keys()) #will output list of keys. ['name','age']


# -------

# Python differentiates between ordered sequences and unordered collections (such as set and dict )

# tuple : An ordered collection of values of any type
a = (1, 2, 3)
b = ('a', 1, 'python', (1, 2))
#Supports indexing; immutable; hashable if all its members are hashable

# list : An ordered collection of n values ( n >= 0 )
a = [1, 2, 3]
b = ['a', 1, 'python', (1, 2), [1, 2]]
b[2] = 'something else' # allowed
# Indices can also be negative which means counting from the end of the list ( -1 being the index of the last element)
# Not hashable; mutable

names.append("Sia") # appends to the ends
names.pop() # same as js.pop(), can be used with an index ==> L.pop(2)
names.insert(1, "Nikki") # inserts in a specific position
names.remove("Bob") # removes first occurence of a value
name.index("Alice") # returns first index of the value or return an error if there's no such value
len(names) # list lenght
a.count(1) # count ocurrence of a list item
a.reverse() # reverse the list. or a[::-1]




# set : An unordered collection of UNIQUE values. Items must be hashable.
a = {1, 2, 'a'}

# dict : An unordered collection of unique key-value pairs; keys must be hashable
a = {1: 'one', 2: 'two'}
b = {'a': [1, 2, 3], 'b': 'a string'}




