from flask import Flask, make_response, jsonify
import shell 

app = Flask(__name__) 

@app.route('/shell/<command>') 
def fun(command):
	return jsonify(shell.runCommand(command))

if __name__ == '__main__': 
	app.run(debug = True) 
