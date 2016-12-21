
# Importing a toy data set contained in sklearn
from sklearn.datasets import load_iris
iris = load_iris()

# printing data set

# print(iris.feature_names)
# print(iris.target_names)

# index = 0
# message = 'Index: ' + repr(index) + '  - values: ' + repr(iris.data[index]) + ' - label: ' +  iris.target_names[iris.target[index]]
# print(message)

# separate training data from testing data
import numpy as np

test_ids = [0,50,100] # select an id from every iris type to use as testing data

# training data
training_target = np.delete(iris.target, test_ids)
training_data = np.delete(iris.data, test_ids, axis= 0)

# testing data
testing_target = iris.target[test_ids]
testing_data = iris.data[test_ids]


# Import classifier and train it with the dataset
from sklearn import tree

classifier = tree.DecisionTreeClassifier()
classifier.fit(training_data, training_target)


# Testing the classifier
predictions = classifier.predict(testing_data)
print('Testing targets: ' + repr(testing_target))
print('Predictions : ' + repr(predictions))