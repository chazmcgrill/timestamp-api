# API Project: Timestamp Microservice

### Instructions :

1. The API endpoint is `GET https://chazmcgrill-timestamp.glitch.me/api/timestamp/:date_string?`
2. The date string must be in either unix timestamp (e.g. 1479663089000) or an date in format yyyy-mm-dd (e.g. "2016-11-20").
3. If a date string is not provided the current time is used.
4. If the date string is **valid** the api returns a JSON object in this format:
`{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
1. If the date string is **invalid** the api returns a JSON object like this: `{"error": "Invalid Date" }`.

#### Example usage:
* ./api/timestamp/2015-12-15
* ./api/timestamp/1450137600000

#### Example output:
* { "unix": 1450137600, "natural": "December 15, 2015" }
