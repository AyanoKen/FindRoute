import sys
import json

resp = {
    "Response":200,
    "Message":"Hello I am Python",
    "Start":'-122.42,37.78',
    "End":'-122.434924,37.794240'
}

print(json.dumps(resp))

sys.stdout.flush()
