---
title: "Reinforcement learning notes"
layout: single
author_profile: false
excerpt: "A collection of notes on mathematical concepts in RL"
header:
  overlay_color: "#333"
---

{% include base_path %}

<!-- KaTeX -->
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# Talks and tutorials on RL

* [Introduction to Reinforcement Learning with Function Approximation](http://media.nips.cc/Conferences/2015/tutorialslides/SuttonIntroRL-nips-2015-tutorial.pdf):
A tutorial given at **NIPS 2015** by Richard Sutton.

* [Policy Search: Methods and Applications](http://icml.cc/2015/tutorials/PolicySearch.pdf): A tutorial given at **ICML 2015** by Jan Peters and
  Gerhard Neumann.

* [Representation and Learning Methods for Complex Outputs](https://www.youtube.com/watch?v=8UKUC5Qx_uc): Talk **NIPS 2014** by Richard Sutton.


# Value and Q-value recursion

There are two forms the expected reward for a given state is encoded:

* v-function: $$  V^{\pi}(s) = \mathbb{E}_{\pi} \left\{ \sum\limits_{k=0}^{\infty} \gamma^k r_{t+k+1} \lvert  s_t = s \right\}  $$
* q-function: $$  Q^{\pi}(s,a) = \mathbb{E}_{\pi} \left\{ \sum\limits_{k=0}^{\infty} \gamma^k r_{t+k+1} \lvert  s_t = s, a_t = a \right\} $$

The v-function is the expected reward given a state whilst the q-function is for a state and action.
The recursive aspect of both these two functions can be derived from first principal and it can be shown that
the v-function is a function of the q-function.

See [RVQ.pdf](/ml/docs/RQV.pdf) for the derivation of the recursion and the link between both functional forms.

See [RL_Solutions_Chap3.pdf](/ml/docs/RL_Solutions_Chap3.pdf) for the
effect of sign and constants in the reward function.

# Policy Gradient Theorem

$$ a = \pi(s;\theta) $$

We want to find an expression for $$ \Delta\theta $$ which uses an estimator of the
expected reward such as the action-value or advantage function.

[Policy Gradient Methods for
Reinforcement Learning with Function
Approximation](https://homes.cs.washington.edu/~todorov/courses/amath579/reading/PolicyGradient.pdf) Proves that the gradient of a policy be derived when using a function approximator for either an
action-value or advantage function.

The key is to able to find an unbiased estimage of the gradient $$\Delta\theta$$
