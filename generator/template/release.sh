#!/usr/bin/env sh
set -e
echo "please choose argument [major|minor|patch]: "
read argument
if [ $argument != 'major' ] && [ $argument != 'minor' ] && [ $argument != 'patch' ]
then 
  echo "argument $argument is not correct,you should choose [major|minor|patch]"
  exit;
fi
read -p "choose $argument - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[yY]$ ]]
then
  echo "Releasing $argument ..."

  npm run release  -- --release-as  $argument
  npm run changelog
  git push --follow-tags origin master

  git add -A
  git commit -m 'docs: [build] changelog'
  git push
fi
