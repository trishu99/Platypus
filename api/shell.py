import os
from subprocess import call
import sys

def runCommand(command):	
	try:
		output = os.popen(command).read().expandtabs(4).split('\n')
	except:
		output = "wrong or incomplete command"
	return output

def changedir(command):
	try:
		os.chdir(command)
	except:
		pass
	return "platypus"

def CWD():
	return os.getcwd()