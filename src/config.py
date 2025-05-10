import json

def loadConfig(file):
    with open(file) as f:
        config = json.load(f)

    print(config['section']['key'])
    return config
