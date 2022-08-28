import csv
import json

filename = 'AMPU Statesmen.csv'

def findTitles():
    list = []
    with open(filename) as f:
        reader = csv.reader(f)
        for i in reader:
            if(i[0] == 'Full Name'):
                return i
def readCSV():
    list = []
    with open(filename, encoding="utf8") as f:
        reader = csv.reader(f)
        for i in reader:
            if i != titles:
                list.append(i)
    return list
def jsonWrite(contents):
    with open('JSONStuff.json', 'a') as f:
        for i in contents:
            f.write(i)
        f.write("\n")
titles = findTitles()
polList = readCSV()
titlesJson = json.dumps(titles)
polListJson = json.dumps(polList)
jsonWrite(titlesJson)
jsonWrite(polListJson)