.PHONY: help install start test clean

START_TIMEOUT := 10

help:
	@cat $(firstword $(MAKEFILE_LIST))

install: \
	node_modules

start:
	timeout $(START_TIMEOUT) npx --no-install http-server -a 0.0.0.0 -p 3030 test &
	sleep 3

test:
	node src/main.js

node_modules:
	npm install --include=dev

clean:
	rm -rf node_modules
