# Getting Started

## Table Of Contents

-   [1. Why do we need version control?](#why-do-we-need-version-control)
    -   [1.1 Keep track of changes to the codebase](#keep-track-of-changes-to-the-codebase)
    -   [1.2 Ease in collaborative work](#ease-in-collaborative-work)
    -   [1.3 Version control tools](#version-control-tools)
-   [2. What is Git?](#what-is-git)
    -   [2.1 Git snapshots](#git-snapshots)
    -   [2.2 Git states](#git-states)

<br /><br />

# Why do we need version control?

Let’s say you create a project and have worked on it for over a month. While
adding a new feature, you realize that something you did a week back won’t allow
your new feature to work properly. You decide to revert those changes but aren’t
sure if you have made similar changes in other files as well.

What if there was a way for you to identify what exact changes you made and
where in your code you made them? That’s where version control can help you out.

<br />

## Keep track of changes to the codebase

In the simplest of terms, you can consider version control to be a record of all
the changes that your software code goes through. Version control systems allow
you to keep track of how your project changes over time, with additional
information about why and when each change was incorporated.

<br />

## Ease in collaborative work

Version control systems can solve many problems that you, as a developer, will
face. They keep track of how your source code changes, who is changing it, and
when. It also allows you to revert those changes as you deem fit.

Because of all these advantages, version control makes collaborative work
easier.

![Version control makes collaborative work easier](https://www.ou.edu/cas-online/website/images/oats_posts/29_discussion-board.jpg)

If you opt not to use version control for your project, sooner or later you will
find yourself copying your project directory into multiple different versions.
You might name them according to whichever priority you want to assign, such as
‘final_version,’ ‘latest_version,’ or something along those lines. However, it
is not a sustainable approach, especially when working collaboratively with a
team. Version control systems essentially formalize this process, so you don’t
have to manually do it yourself.

<br />

## Version control tools

Version control tools have been continuously updated over time, following the
ever-changing workflows that developers choose to use. In more recent times, Git
has become the tool of choice for version control.

In the next lesson, we will look into what Git is and what makes it such a
widely used software for version control.

<br /><br />

# What is Git?

Git is a distributed version control software. As a result, a complete copy of
the entire codebase will be available on every contributor’s computer; we can
also call this codebase a local repository.

Git tracks the local repository, maintains a record of all the changes that
occur within it. It removes the hassle of keeping multiple versions of the
project in separate directories and also makes sharing changes to the source
code between collaborators seamless and quick.

<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png" style=" background-color: white; width: 300px; margin: 10px auto"
/>

The distributed nature of Git makes it unique and efficient. Since every
contributor or collaborator has their own ‘clone’ of the source code in their
local repository, it allows Git to track, add, or revert changes very quickly.
Git uses the local database to keep a record of the changes to the project
files.

svg viewer Distributed version control allows everyone to clone the entire
codebase in 'local repositories'.

<br />

## Git snapshots

A Git snapshot is, essentially, the state of the project files at a certain
point in time. In other words, instead of maintaining a record of file-based
changes that occur over time, Git will store that data as a snapshot, which is
the entire state of the project at that particular moment. While saving the
snapshot, it will keep those files that did get updated and only keep references
of files that didn’t change from the previous snapshot to avoid duplicates.

<br />

## Git states

Git has three primary states that it allows the project’s files to acquire. The
three states are:

-   **Modified** - files that have been changed, but the changes have not yet
    been marked by Git. These changes won’t become part of the next snapshot.
-   **Staged** - the changes have been tracked by Git and will be marked as such
    in the next snapshot.
-   **Committed** - the changed files that have successfully become part of the
    latest snapshot. svg viewer How a file changes states. Before we move on to
    learn more about Git, let’s briefly go over how you can use the terminal to
    edit text files using text editors and terminal commands.
