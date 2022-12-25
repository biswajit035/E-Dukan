### Step to setup the project from GitHub to your local system.

<h3>Setting Project on your Local System :- </h3><br>
<ul>
<li>Fork this Repository or Project</li>
 <li> This will create a copy of this repository in your account.</li>
<li>Copy the link of the Repository</li><br>
<li>Open Git bash where you want to clone the project and clone it </li>
 <li>Clone it</li>
<li>Run Command and Hit Enter <br>
 
 ```
 git clone <the link you just copied>
 ```
 
 In this case it is <br> ``` git clone  https://github.com/biswajit035/E-Dukan.git ```
  </li>
 <li> After you hit enter you will notice that some downloading will start. It's actually cloning of repo form your GitHub repository to your local system.</li><br>
 <li> After this you will notice a folder is created with the name of repository </li><br>
 <li>Then just close the Git bash and open this folder in your preferred text editor...</li><br>
 <li>Here is an example in VS Code. </li><br>
</ul>

### 5. Now Make necessary changes and commit them , lets say you have to add your name in readme , you already set up the project in local system . Now before starting your work always rembember to pull latest change from the main Repo.

<ul>

 <li>Fetch And Merge </li><br>
	<br>
 <li>Pull these changes in your local system</li>
 	<br>
 ```
 git pull origin main
 ```
	<br><br>
 The same command can also be divided into the following - <br>
	1. Fetching all commits from upstream <br>
	git fetch --all --prune<br>
	2. Reset the main branch of origin to upstream<br>
	git reset --hard upstream/main<br><br>
	
 
 <li> make a new branch and then make the changes , then commit them. make sure to commit to the new branch <br>
 <b>Never commit in master branch</b> </li>
 
 ```
 git checkout -b new_branch_name
 git add -A
 git commit -a -m "message"
 ```
 <li>After commiting your changes on your local host you have to push that changes to GitHub , make sure you push the new branch </li>
 
 ```
git push origin new_branch_name
 ```

</ul>
  
### 6. Make the Pull Request
<ul>
<li>when you push the changes you will notice a new branch will be created on GitHub and there will be a green button for creating pull request. Click on it.</li>
<br>
<li>After this a new page will be open like this</li>
<li>Now add a title and description of your PR and click on create pull request.</li>
<br>
<li>Congrats 🎉 your Pull Request is created</li><br>
</ul>

---
