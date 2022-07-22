# goose-helper


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

<p float="left">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" />
</p>

 ## Description

_Welcome to Goose-helper! Goose-helper is a helper function for Mongoose API requests. While working on a homework assignment for school I noticed alot of repitition in the code when making simple API requests and I wanted to solve that problem._ 

This application:
* uses the [Mongoose](https://mongoosejs.com/) library as a dependency;

---

  ## Table of Contents
  
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Breakdown the function](#breakdown-the-function)
  - [Screenshots](#screenshots)
  - [License](#license)
  - [Contributions](#how-to-contribute)
  - [Questions](#questions)

  ---


  ## Installation

This project is published on [npm](https://www.npmjs.com/package/goose-helper).
* Remember Mongoose is a dependency of this project, refer to their documentation for more information. [Mongoose](https://mongoosejs.com/)
* `npm i mongoose`
* `npm i goose-helper` 



  ---


 ## How to use

 Use Mongoose as you normally would to create your models. In your controller, you can use Goose-helper to create your API requests. Instead of having the same lines of code over and over again, Goose-helper will help create the request for you.


* The way I was using Mongoose to make requests:

```
  getThought(req, res) {
        Thought.find()
            .then((thoughts) =>
             res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    }


  getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Could not find a thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }


     updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Could not find a thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }


     deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ message: 'Thought was deleted!' }))
            .catch((err) => res.status(500).json(err));
    }

```

* Verses the way I make that same request with Goose-helper:

```

const gooseHelper = require('goose-helper');

 getThoughts(req, res) {
        gooseHelper(req, res, Thought.find());
    }


getSingleThought(req, res) {
        gooseHelper(req, res, Thought.findOne({ _id: req.params.thoughtId }), 'Could not find thought with that ID');
    }


 updateThought(req, res) {
        gooseHelper(req, res, Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true }), 'Could not find thought with that ID');
    }


 deleteThought(req, res) {
        gooseHelper(req, res, Thought.findOneAndDelete({ _id: req.params.thoughtId }), 'Could not find thought with that ID', 'Your thought has been deleted');
    }

```


---


## Breakdown the function

gooseHelper(req, res, modelAction, optionalErrorMessage, optionalSuccessMessage, optionalUpdate)

    * `req` is the request object
    * `res` is the response object
    * `modelAction` is the Mongoose model with action to be performed
    * `optionalErrorMessage` is the error message to be returned if the action fails
    * `optionalSuccessMessage` is the success message to be returned if the action succeeds
    * `optionalUpdate` NOTE: THIS IS NOT CURRENTLY TESTED OR WORKING! This will be the used to make a second action after the first action has been performed.

---




    
## License

   MIT License

Copyright (c) [2022] [Amber Robeck]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

  
  ---

 ## How to Contribute

However you would like to contribute I always look forward to learning something new, feel free to email me!


  ---

  ## Questions


[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arr5533@gmail.com)



* OR here

 [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Amber-Robeck)

* OR here


[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amber-robeck/)

