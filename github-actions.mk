.PHONY: help install test clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

install: \
	node_modules

test:
	node src/main.js

node_modules:
	npm install --include=dev

clean:
	rm -rf node_modules
