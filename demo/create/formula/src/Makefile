# Make Run Node
BINARY_NAME_UNIX=formula.sh
BINARY_NAME_WINDOWS=formula.bat
DIST=../dist
DIST_DIR=$(DIST)/commons/bin

build:
	mkdir -p $(DIST_DIR)
	cp run_template $(BINARY_NAME_UNIX) && chmod +x $(BINARY_NAME_UNIX)
	sed '1d' run_template > $(BINARY_NAME_WINDOWS) && chmod +x $(BINARY_NAME_WINDOWS)

	cp -r . $(DIST_DIR)

	#Clean files
	rm $(BINARY_NAME_UNIX)