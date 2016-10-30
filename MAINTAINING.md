# Maintaining

## Releasing a new version

This project follows [semver](http://semver.org/). So if you are making a bug
fix, only increment the patch level "2.0.x". If any new files are added, a
minor version "2.x.x" bump is in order.

### Make a release commit

To prepare the release commit:

1. Edit the [bower.json](https://github.com/github/fetch/blob/master/bower.json)
`version` value.
2. Change the npm [package.json](https://github.com/github/fetch/blob/master/package.json)
`version` value to match.
3. Make a single commit with the description as "Fetch 2.x.x".
4. Finally, tag the commit with `v2.x.x`.

```
$ git pull
$ vim bower.json
$ vim package.json
$ git add bower.json package.json
$ git commit -m "Fetch 2.x.x"
$ git tag v2.x.x
$ git push
$ git push --tags
```
