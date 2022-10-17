import os
import re
from pathlib import Path
# import subprocess
# import sys

def ch(cmd):
	curr_dir = os.getcwd()
	#print(curr_dir)
	t = re.split("[ \n\t\r]", cmd);
	
	
	try:
		if (t[0] == "cd" and len(t) == 1) or (t[1] == "~" and len(t) == 2):
			home = str(Path.home())
			os.chdir(home)
		else:
			os.chdir(t[1])		
		ret = os.getcwd()
	except:
		ret = "no such dir"
	return ret	
	


def runCommand(command):	
	try:
		if command.startswith("cd"):
			output = ch(command)
		else:
			output = os.popen(command).read().expandtabs(4).split('\n')
			for x in output:
				print(x)
	except:
		output = "wrong or incomplete command"
	return output
