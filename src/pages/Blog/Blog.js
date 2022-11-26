import React from 'react';

const Blog = () => {
    return (
      <div className="px-5 sm:px-10 md:px-20">
        <h2 className="text-3xl font-semibold text-primary text-center mt-10 mb-5">
          Question and Answer
        </h2>
        <div className="w-full lg:w-5/12 md:w-7/12 mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-4"
          >
            <div className="collapse-title font-medium">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content">
              <p>
                As your application grows, it helps to be more intentional about
                how your state is organized and how the data flows between your
                components. Redundant or duplicate state is a common source of
                bugs. In this chapter, you’ll learn how to structure your state
                well, how to keep your state update logic maintainable, and how
                to share state between distant components.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-4"
          >
            <div className="collapse-title font-medium">
              How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p>
                Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-4"
          >
            <div className="collapse-title font-medium">
              What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content">
              <p>
                Unit testing is a type of software testing where individual
                units or software components are tested. Its purpose is to
                validate that each unit of code performs as expected. A unit can
                be anything you want it to be — a line of code, a method, or a
                class. To justify any effort in business, there must be a
                positive impact on the bottom line. Here are a few benefits to
                writing unit tests: Unit tests save time and money. Usually, we
                tend to test the happy path more than the unhappy path. If you
                release such an app without thorough testing, you would have to
                keep fixing issues raised by your potential users. The time to
                fix these issues could’ve been used to build new features or
                optimize the existing system. Bear in mind that fixing bugs
                without running tests could also introduce new bugs into the
                system.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-4"
          >
            <div className="collapse-title font-medium">
              React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
              <p>
                There are three frameworks for building web applications that
                every frontend developer has heard about: React, Vue.js, and
                Angular. React is a UI library, Angular is a fully-fledged
                front-end framework, while Vue.js is a progressive framework.
                They can be used almost interchangeably to build front-end
                applications, but they’re not 100 percent the same, so it makes
                sense to compare them and understand their differences. Each
                framework is component-based and allows the rapid creation of UI
                features. However, they all have a different structure and
                architecture — so first, we’ll look into their architectural
                differences to understand the philosophy behind them.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;