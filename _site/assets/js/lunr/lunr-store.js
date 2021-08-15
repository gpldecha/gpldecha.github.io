var store = [{
        "title": "C++",
        "excerpt":"move and forwarding Microsoft tutorial on l-values A review on l-values in c++ What does std::move do ? When and for whate would you use it for ? What is rvalue and lvalue references ? Scott Meyers talk on std::move and std::forward std::move is an unconditional cast to an rvalue....","categories": [],
        "tags": [],
        "url": "/cs/c++/",
        "teaser": null
      },{
        "title": "CPU isolation",
        "excerpt":"“If we would like to get real-time performance on single-CPU systems it is necessary to adapt the entire system, e.g. using the PREEMPT_RT patch or an RTOS. This is not always necessary in a multicore system.” Architecture layout Before: lstopo After: sudo gedit /etc/default/grub GRUB_CMDLINE_LINUX_DEFAULT=\"quiet splash isolcpus=1,5\" reboot and chneck...","categories": [],
        "tags": [],
        "url": "/cs/cpu_isolation/",
        "teaser": null
      },{
        "title": "PREEMPT_RT",
        "excerpt":"Check which preempts are set on your distribution: cat /boot/config-4.15.0-50-generic | grep PREEMPT CONFIG_PREEMPT CONFIG_PREEMPTIRQ_EVENTS CONFIG_HZ These options should be set (according to Real time ethernet) CONFIG_RCU_BOOST=y CONFIG_RCU_BOOST_PRIO=99 How To determine Linux Kernel Timer Interrupt Frequency Interupt handling Red hat performance tuning Compile linux kernel with preempt_rt for ubuntu 18.04...","categories": [],
        "tags": [],
        "url": "/cs/preempt_rt/",
        "teaser": null
      },{
        "title": "Programming notes",
        "excerpt":"Row-major memory-layout-of-multi-dimensional-arrays Terminology name mangling Adds meta-data to the name of a function. This process, in the case of C++, takes place during the compilation. One reason for this is that the compilation process first converts the C++ code to C and C only allows unique function names throughout the...","categories": [],
        "tags": [],
        "url": "/cs/programming_notes/",
        "teaser": null
      },{
        "title": "Weighted Gaussian Linear Regression",
        "excerpt":"Resources Vandenberghe Lectures Notation variable dimension name \\(\\mathbf{y}_i\\) \\(\\mathbb{R}^{(M \\times 1)}\\) ith predictor \\(\\mathbf{x}_i\\) \\(\\mathbb{R}^{(P \\times 1)}\\) ith state \\(\\alpha_i\\) \\(\\mathbb{R}^{(1 \\times 1)}\\) ith sample weight \\(\\mathbf{w}\\) \\(\\mathbb{R}^{(P \\times M)}\\) weights \\(\\mathbf{Y}\\) \\(\\mathbb{R}^{(N \\times M)}\\) all predictors \\(\\mathbf{X}\\) \\(\\mathbb{R}^{(N \\times P)}\\) all states \\(\\boldsymbol{\\alpha}\\) \\(\\mathbb{R}^{(N \\times N)}\\) identity matrix with...","categories": [],
        "tags": [],
        "url": "/ml/gaussian_linear_regression/",
        "teaser": null
      },{
        "title": "Policy gradient notes",
        "excerpt":"Resources Policy gradient methods for robotics arg min blog: a blog of minimum value Notation variable dimension name \\(\\tau\\) \\(s_0, u_0, \\dots, s_{H-1}, u_{H-1}\\) trajectory \\(p(s_{t+1}|s_t, u_t)\\) \\(\\mathbb{R}\\) state transition dynamical model \\(\\pi_{\\theta}(u_t|s_t)\\) \\(\\mathbb{R}\\) policy \\(P_{\\theta}(\\tau)\\) \\(p(s_0)\\prod_{t=0}^{H-1} p(s_{t+1}|s_t, u_t)\\, \\pi_{\\theta}(u_t|s_t)\\) probability of a trajectory \\(R(\\tau)\\) \\(\\sum_{t=0}^{H-1} r(s_t, u_t)\\) Utility of...","categories": [],
        "tags": [],
        "url": "/ml/policy_gradient/",
        "teaser": null
      },{
        "title": "Reinforcement learning an introduction",
        "excerpt":"Exercise 2.9 Demonstration that the soft-max distribution is equal to the logistic and sigmoid distribution for the case of two actions. First we show that the soft-max is a logistic function. \\(\\begin{align} Pr(A = a_1) &amp;= \\frac{\\exp H_t(a_1)}{ \\exp H_t(a_0) + \\exp H_t(a_1)} \\\\ &amp;= \\frac{\\exp \\left( H_t(a_1) - H_t(a_0)...","categories": [],
        "tags": [],
        "url": "/ml/reinforcement_learning_introduction/",
        "teaser": null
      },{
        "title": "Reinforcement learning notes",
        "excerpt":"Talks and tutorials on RL Introduction to Reinforcement Learning with Function Approximation: A tutorial given at NIPS 2015 by Richard Sutton. Policy Search: Methods and Applications: A tutorial given at ICML 2015 by Jan Peters and Gerhard Neumann. Representation and Learning Methods for Complex Outputs: Talk NIPS 2014 by Richard...","categories": [],
        "tags": [],
        "url": "/ml/rl_notes/",
        "teaser": null
      },{
        "title": "Safely Approximating the Value Function",
        "excerpt":"Bootstrapping methods are more difficult to combine with FA than are non-bootstrapping methods. What is function approximation ? What is the main cause of diverging value function ? When can the value function diverge ? The deadly triad (exert from Sutton’s slides NIPS 2015 tutorial) The risk of divergence arises...","categories": [],
        "tags": [],
        "url": "/ml/safely_approximating_the_value_function/",
        "teaser": null
      },{
        "title": "Learning a POMDP policy from human demonstrations",
        "excerpt":"Objective The aim of this project is to learn a belief space policy \\(\\pi_{\\boldsymbol{\\theta}}: b \\mapsto a\\), which takes as input a probability distribution over the state space \\(b\\) (belief) and outputs an action \\(a\\), to accomplish a search task given no visual information. When the state space (robot&#8217;s position)...","categories": [],
        "tags": [],
        "url": "/projects/belief_space_policy/",
        "teaser": "/images/projects/belief_pomdp/barret_search-th.jpg"
      },{
        "title": "E-PCA",
        "excerpt":"E-PCA is a non-linear dimensionality reduction technique particularly suited to probability distributions, see the paper Exponential Family PCA for Belief Compression in POMDPs. Matlab implementation of E-PCA. The left figure illustrates a filtered 2D probability distribution of an agent&#8217;s location in a square world with a red block (goal state)...","categories": [],
        "tags": [],
        "url": "/projects/e-pca/",
        "teaser": "/images/projects/e_pca/reconstructed_belief.gif"
      },{
        "title": "KUKA LWR ROS",
        "excerpt":"                                    A ROS package to control the KUKA LWR 4,  both in simulation and for the physical robot. Rviz is used to visualize the sensor data coming from either the Gazebo simulator or the FRI API interfacing the KUKA control box.      github package kuka-lwr-ros   examples using this package: kuka-lwr-ros-examples  ","categories": [],
        "tags": [],
        "url": "/projects/kuka_lwr_ros/",
        "teaser": "/images/projects/kuka_lwr_ros/kuka-lwr-th.png"
      },{
        "title": "Machine Learning toolbox",
        "excerpt":"During my time as Ph.D at the LASA group in EPFL I developed a Machine Learning toolbox for an advanced machine learning class with my fellow teaching assistant colleges. My contributions included the following components: Toolbox structure Bayesian linear regression Gaussian Process regression Exercises on Kernel-PCA methods for cluster discovery...","categories": [],
        "tags": [],
        "url": "/projects/ml_toolbox/",
        "teaser": "/images/projects/ml_toolbox/adda-th.png"
      },{
        "title": "Non-parametric Bayesian state space filter",
        "excerpt":" Objective   Bayesian State Space Filter   Measurement Likelihood Memory Filter   1D world and 2 beliefs                                          Video: 1D world and two beliefs  MLMF             1D world and 3 beliefs                                          Video: 1D world and three beliefs  MLMF             Space and time complexity   Active-SLAM                                          Video: Active-SLAM (2 Beliefs)  MLMF                                                    Video: Active-SLAM (2 Beliefs)  MLMF             ","categories": [],
        "tags": [],
        "url": "/projects/mlmf/",
        "teaser": "/images/projects/mlmf/slam-th.png"
      },{
        "title": "Non-parametric regression",
        "excerpt":"github repository: non-parametric-regression This package provides a set of non-parametric methods for regression. The algorithmic implementation of the methods are in C++ whilst the interface is in Python. Non-parametric regression methods typically retains all the training data. The value of a new test point is a function of the neighboring...","categories": [],
        "tags": [],
        "url": "/projects/np_regression/",
        "teaser": "/images/projects/np_regression/lwr-2D-th.png"
      },{
        "title": "Point Mass Filter",
        "excerpt":"Figure: PMF example Left: Point Mass Filter: intensity of blue regions is proportional to the probability that the agent (orange pack-man) occupies this region. Right: Likelihood of the location the agent could be in given a measurement (range and bearing shown in red). Matlab implementation of PMF can be found...","categories": [],
        "tags": [],
        "url": "/projects/pmf/",
        "teaser": "/images/projects/pmf/pmf-th.png"
      },{
        "title": "Fitted Policy Iteration for a POMDPs for a continuous state-action space.",
        "excerpt":"Objective The parameters of a continuous state and action POMDP policy are initially learned from human teachers and improved through a fitted reinforcement learning approach. As an application we consider the task in which both human teachers and robot apprentice must successfully localize and connect an electrical power socket, a...","categories": [],
        "tags": [],
        "url": "/projects/rl_belief_space/",
        "teaser": "/images/projects/rl_pomdp/value-function-th.png"
      },{
        "title": "Autonomous Rover",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/projects/rover/",
        "teaser": "/images/projects/rover/rover.gif"
      },{
        "title": "Syntouch tactile classifier",
        "excerpt":"A developed a Qt-GUI and a set Machine Learning classifiers for the Syntouch BioTac sensor, a synthetic finger which provide pressure and temperature information at 19 different locations across the finger’s skin. Figure Data collection illustrates the data gathering step for four different classes (Corner, Edge, Surface, Air ). Once...","categories": [],
        "tags": [],
        "url": "/projects/tactile_classifier/",
        "teaser": "/images/projects/tactile_classifier/syntouch-th.jpg"
      },{
        "title": "Deploying a Python/C++ package",
        "excerpt":"I have written a C++ library for non-parametric regression. Now C++ is great if you want to write efficient code, however it is less than ideal when it comes to plotting and visualising data. For this either Python or Matlab are perfect candidates. So I have written a Python wrapper...","categories": [],
        "tags": [],
        "url": "/deploying-python-cpp/",
        "teaser": null
      },{
        "title": "Ubuntu/Debian packaging",
        "excerpt":"How to package a C++ program into a debian package First do all all the steps in: Getting setup Packaging New Software I will be doing a walk through of the example given in the Packaging New Software in which you will be deploying a simple hello world program. I...","categories": [],
        "tags": [],
        "url": "/packaging-debian/",
        "teaser": null
      },{
        "title": "ArduPilot ecosystem",
        "excerpt":"DroneKit DroneKit-Python allows developers to create apps that run on an onboard companion computer and communicate with the ArduPilot flight controller using a low-latency link. The API communicates with vehicles over MAVLink. It provides programmatic access to a connected vehicle’s telemetry, state and parameter information, and enables both mission management...","categories": [],
        "tags": [],
        "url": "/robotics/ardupilot",
        "teaser": null
      },{
        "title": "Batteries",
        "excerpt":"jargon LiPo - Lithium-ion Polymer NiMH - Nickel-Metal Hydrid Discharge Rating Capacity Capacity is denonted in milliampers hours (mAh) on the battery. It is the amount of charge stored in the battery. If you have a battery with a capaciy 1 mAh and a motor is drawing 1 mAh then...","categories": [],
        "tags": [],
        "url": "/robotics/batteries",
        "teaser": null
      },{
        "title": "Link manipulator dynamics ",
        "excerpt":"Derivation of the Equation of motion of a three-link-manipulator: This part is necessary for programming Exercise 6 of Introduction to Robotics Mechanics and Control. The following parameters are specified: \\(l1 = l2 = 0.5m\\) \\(m1 = 4.6\\)Kg \\(m2 = 2.3\\)Kg \\(m3 = 1.0\\)Kg \\(g = 9.8 m/s^2\\) For link 3...","categories": [],
        "tags": [],
        "url": "/robotics/dynamics",
        "teaser": null
      },{
        "title": "Inverse Kinematics",
        "excerpt":"      Track-IK [1]  ","categories": [],
        "tags": [],
        "url": "/robotics/inverse_kinematics",
        "teaser": null
      },{
        "title": "Jacobian",
        "excerpt":"This is a set of notes regarding the Jacobian matrix of robot manipulator. I will be using material for the following references Introduction to Robotics Mechanics and Control [1] Khatib Introdction to robotics Chapter 4. [2] ETHZ Rbot Dynamics lecture notes [3] It is an important consept and is used...","categories": [],
        "tags": [],
        "url": "/robotics/jacobian",
        "teaser": null
      },{
        "title": "PX4 rover tutorial",
        "excerpt":"Building the Firmware Uncomment in the file src/Firmware/cmake/configs/nuttx_px4fmu-v2_default.cmake the line examples/px4_simple_app. This will register the application src/examples/px4_simple_app. Rebuild the Firmware: ~/src/Firmware$ make px4fmu-v3_rover Upload it to the board. This step will erase what is currently installed on the board and processed to install the new compiled px4 Firmware. ~/src/Firmware$ make...","categories": [],
        "tags": [],
        "url": "/robotics/px4_rover",
        "teaser": null
      }]
