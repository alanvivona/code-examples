import sklearn
from sklearn import tree

features = [ [140, 1], [130, 1], [150, 0], [170, 0] ]
labels = [0, 0, 1, 1]

# Using a desision tree classifier
classifier = tree.DecisionTreeClassifier()

# Training classifier
classifier = classifier.fit(features,labels)

# Making a prediction
prediction = classifier.predict([[160, 0]]);
print(prediction)