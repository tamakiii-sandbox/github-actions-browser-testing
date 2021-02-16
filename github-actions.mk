.PHONY: help install start test clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

install: \
	node_modules

start:
	npx --no-install http-server -a 0.0.0.0 -p 3030 test

test:
	node src/main.js

node_modules:
	npm install --include=dev

clean:
	rm -rf node_modules
