from index import parse_json

def test_parse_json():
    json_str = '{"key": "value"}'
    assert parse_json(json_str) == {"key": "value"}
    print("base case assert passed")

    json_str = '{"key": "value"}\n{"key": "value"}'
    assert parse_json(json_str) == [{"key": "value"}, {"key": "value"}]
    print("multiple logs in one message assert passed")

    json_str = '{"key": "value"}\n{"key": "value"'
    assert parse_json(json_str) == [{"key": "value"}]
    print("incomplete log assert passed")

    json_str = '{"key": "value"}\n{"key": "value"}\n{"key": "value"}'
    assert parse_json(json_str) == [{"key": "value"}, {"key": "value"}, {"key": "value"}]
    print("more than 2 logs assert passed")

if __name__ == "__main__":
    test_parse_json()
