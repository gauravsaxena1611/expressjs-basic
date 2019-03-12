# expressjs-basic



Steps to add local project to GitHub
-------------------------------------

1, Open up a Windows command prompt.

2, Change into the directory where your source code is located in the command prompt.

3, First, create a new repository in this directory 
   >git init. 
   This will say "Initialized empty git repository in ....git" (... is the path).

4, Now you need to tell git about your files by adding them to your repository. Do this with 
   >git add <filename>. 
   If you want to add all your files, you can do 
   >git add .

5, Now that you have added your files and made your changes, you need to commit your changes so git can track them. 
   >git commit -m "initial project commit". 
   -m lets you add the commit message in line.

So far, the above steps is what you would do even if you were not using github. They are the normal steps to start a git repository. Remember that git is distributed (decentralized), means you don't need to have a "central server" (or even a network connection), to use git.

6, Now you want to push the changes to your git repository hosted with github. To you this by telling git to add a remote location, and you do that with this command:
   >git remote add origin https://github.com/gauravsaxena1611/expressjs-basic.git

7, Once you have done that, git now knows about your remote repository. You can then tell it to push (which is "upload") your commited files:
   >git push -u origin master
