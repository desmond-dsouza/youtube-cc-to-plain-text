# Converts downloaded youtube cc text (json) to single concatenated text
#    Youtube closed-caption download gives a JSON file
#    This script converts JSON file into a concatenated text file with time stamps
#    Command-line args: input file name, output file name

from functools import reduce
import json
import sys

def concatText(txt, nxt):
    return txt + " " + "[" + nxt['start'] +"] " + nxt['text']

def convertFile(raw, concat):
	with open(raw, mode='r') as inFile, open(concat, mode="w") as outFile:
	    cclips = json.load(inFile)
	    out = reduce(concatText, cclips, "")
	    outFile.write(out)	


convertFile(sys.argv[1], sys.argv[2])
