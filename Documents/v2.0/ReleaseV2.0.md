git log --pretty=format:"%h %ad %an %s" --date=short --reverse --no-merges --before="2024-01-01" > Documents/ReleaseV1.0_commits.txt

git log --pretty=format:"%h | %ad | %an | %s" --date=short --reverse --no-merges > Documents/ReleaseV1.0_commits.txt