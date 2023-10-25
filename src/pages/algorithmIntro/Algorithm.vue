<template>
  <div class="holly">
    <div id="tree-container"></div>
  </div>

<!--  <div class="intro">-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">这是一棵此系统所包含可解释性方法的分类树</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'FZShuTi'">Tips:</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">1.拖动屏幕可以移动树</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">2.鼠标滚轮转动可以改变树的大小</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">3.左键单击节点可以收缩和扩张节点</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">4.右键单击节点可以查看详细介绍</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">5.拖动节点可以试图将其分离出树，但是并不会成功</label>-->
<!--    <br>-->
<!--    <label style="font-size:20px; color: white; border: 0; margin: 0 0 10px 0; font-family: 'STSong'">6.有头像的表明为VIPA课题组工作</label>-->
<!--    <br>-->
<!--    <el-button class="lookdata" style="margin: 10px 0 0 0;" @click="showDialog" type="primary" plain>可解释性评估标准</el-button>-->
<!--  </div>-->

  <el-dialog class="scrollable" v-model="dialogVisible" style="width:30%; height:50%; text-align: center; overflow: auto;"
             :draggable="true" @close="dialogVisible = false" :append-to-body="true" title="可解释性评估标准"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;尽管“<span style="font-weight: bold;">可解释性</span>”这个词经常被使用，但人们对可解释性的确切含义并没有达成共识，这在一定程度上解释了当前多样的可解释方法分类系统。一些研究人员探索模型的事后解释，而另一些则关注模型本身的可解释建模过程（如模型机制之间的相互作用）。一般而言，可解释性代表了人类理解和推理模型的程度。
              基于<el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">论文1</el-link>和<el-link href="https://dl.acm.org/doi/pdf/10.1145/3236386.3241340" target="_blank" type="primary">论文2</el-link>，可解释性的含义总结如下：
            </div>
            <ul style="text-align: left">
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">可模拟性 </span>是对整个模型的理解，它在统一的理论框架下理解模型的机制。一个例子是径向基函数（RBF）网络（使用RBF作为激活函数的人工神经网络），其可以表达为带有正则化项的插值问题的解。从可模拟性的角度来看，模型越简单，可模拟性就越高。例如，简单的线性分类器或回归器对于人类而言完全可以理解。为了增强可模拟性，我们可以改变模型的某些模块或使用特制的正则化项。
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">可分解性 </span>是指以神经元、层、块等组件的形式理解模型。这种模块化分析在工程领域非常流行。例如，复杂系统的内部工作被分解为一些功能模块的组合。软件开发和光学系统设计等众多工程案例证明了模块化分析是有效的。在机器学习中，决策树是一种模块化方法，其中每个节点都有一个明确的功能，用于判断是否满足一个区分性条件，而每个分支提供一个判断的输出，最终，每个叶节点给出计算所有属性到达该节点后的最终决策。对神经网络进行模块化设计有助于网络设计的优化，因为我们知道模型当中每个组件的责任和作用。
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">算法透明度 </span>是指理解模型的训练过程、推理机制。神经网络目标函数的景观非常非凸。其没有唯一解的事实损害了模型的透明度。尽管如此，当前基于随机梯度下降学习算法仍然高效。如果我们能够理解为什么这些学习算法有效，深度学习的研究和应用将被加速。
              </li>
            </ul>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;虽然不同的工作可能从完全不同的角度对神经网络进行解释，但对于此系统中涉及到的可解释算法，我们都可以从上述三个方面进行打分。
            </div>
          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Although the word "<span style="font-weight: bold;">interpretability</span>" is frequently used, people do not reach a consensus on the exact meanings of interpretability, which partially accounts for why current interpretation methods are so diverse. For example, some researchers explore post-hoc explanations for models, while some focus on the interplay mechanism between machineries of a model. Generally speaking, interpretability refers to the extent of human’s ability to understand and reason a model.
              Based on <el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">papaer 1 </el-link>and <el-link href="https://dl.acm.org/doi/pdf/10.1145/3236386.3241340" target="_blank" type="primary">papaer 2, </el-link>the implications of interpretability are summarized as follows:
            </div>
            <ul style="text-align: left">
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Simulatability </span>is considered as the understanding over the entire model. In a good sense, we can understand the mechanism of a model at the top level in a unified theoretical framework. one example is radial basis function (RBF) networks that can be expressed by a solution to the interpolation problem with a regularization term, where a RBF network is an artificial neural network with RBFs as activation functions. In view of simulatability, the simpler the model is, the higher simulatability the model has. For example, a linear classifier or regressor is totally understandable. To enhance simulatability, we can change some facilities of models or use crafted regularization terms.
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Decomposability </span>is to understand a model in terms of its components such as neurons, layers, blocks, and so on. Such a modularized analysis is quite popular in engineering fields. For instance, the inner working of a complicated system is factorized as a combination of functionalized modules. A myriad of engineering examples such as software development and optical system design have justified that a modularized analysis is effective. In machine learning, a decision tree is a kind of modularized methods, where each node has an explicit utility to judge if a discriminative condition is satisfied or not, each branch delivers an output of a judgement, and each leaf node represents the final decision after computing all attributes. Modularizing a neural network is advantageous to the optimization of the network design since we know the role of each and every component of the entire model.
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Algorithmic Transparency </span>is to understand the training process and dynamics of a model. The landscape of the objective function of a neural network is highly non-convex. The fact that deep models do not have a unique solution hurts the model transparency. Nevertheless, it is intriguing that
                current stochastic gradient descent (SGD)-based learning algorithms still perform efficiently and effectively. If we can understand why learning algorithms work, deep learning research and applications will be accelerated.
              </li>
            </ul>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Although different works may interpret neural networks from completely different perspectives, we can rate the interpretability of the involved algorithms in this system from the above three aspects.
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="scrollable" v-model="dialogVisible_interp" style="width:30%; height:50%; text-align: center; overflow: auto;"
             :draggable="true" @close="dialogVisible_interp = false" :append-to-body="true" title="可解释性"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;尽管“<span style="font-weight: bold;">可解释性</span>”这个词经常被使用，但人们对可解释性的确切含义并没有达成共识，这在一定程度上解释了当前多样的可解释方法分类系统。一些研究人员探索模型的事后解释，而另一些则关注模型本身的可解释建模过程（如模型机制之间的相互作用）。一般而言，可解释性代表了人类理解和推理模型的程度。
              基于<el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">论文1</el-link>和<el-link href="https://dl.acm.org/doi/pdf/10.1145/3236386.3241340" target="_blank" type="primary">论文2</el-link>，可解释性的含义总结如下：
            </div>
            <ul style="text-align: left">
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">可模拟性 </span>是对整个模型的理解，它在统一的理论框架下理解模型的机制。一个例子是径向基函数（RBF）网络（使用RBF作为激活函数的人工神经网络），其可以表达为带有正则化项的插值问题的解。从可模拟性的角度来看，模型越简单，可模拟性就越高。例如，简单的线性分类器或回归器对于人类而言完全可以理解。为了增强可模拟性，我们可以改变模型的某些模块或使用特制的正则化项。
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">可分解性 </span>是指以神经元、层、块等组件的形式理解模型。这种模块化分析在工程领域非常流行。例如，复杂系统的内部工作被分解为一些功能模块的组合。软件开发和光学系统设计等众多工程案例证明了模块化分析是有效的。在机器学习中，决策树是一种模块化方法，其中每个节点都有一个明确的功能，用于判断是否满足一个区分性条件，而每个分支提供一个判断的输出，最终，每个叶节点给出计算所有属性到达该节点后的最终决策。对神经网络进行模块化设计有助于网络设计的优化，因为我们知道模型当中每个组件的责任和作用。
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">算法透明度 </span>是指理解模型的训练过程、推理机制。神经网络目标函数的景观非常非凸。其没有唯一解的事实损害了模型的透明度。尽管如此，当前基于随机梯度下降学习算法仍然高效。如果我们能够理解为什么这些学习算法有效，深度学习的研究和应用将被加速。
              </li>
            </ul>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;虽然不同的工作可能从完全不同的角度对神经网络进行解释，但对于此系统中涉及到的可解释算法，我们都可以从上述三个方面进行打分。
            </div>
          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Although the word "<span style="font-weight: bold;">interpretability</span>" is frequently used, people do not reach a consensus on the exact meanings of interpretability, which partially accounts for why current interpretation methods are so diverse. For example, some researchers explore post-hoc explanations for models, while some focus on the interplay mechanism between machineries of a model. Generally speaking, interpretability refers to the extent of human’s ability to understand and reason a model.
              Based on <el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">papaer 1 </el-link>and <el-link href="https://dl.acm.org/doi/pdf/10.1145/3236386.3241340" target="_blank" type="primary">papaer 2, </el-link>the implications of interpretability are summarized as follows:
            </div>
            <ul style="text-align: left">
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Simulatability </span>is considered as the understanding over the entire model. In a good sense, we can understand the mechanism of a model at the top level in a unified theoretical framework. one example is radial basis function (RBF) networks that can be expressed by a solution to the interpolation problem with a regularization term, where a RBF network is an artificial neural network with RBFs as activation functions. In view of simulatability, the simpler the model is, the higher simulatability the model has. For example, a linear classifier or regressor is totally understandable. To enhance simulatability, we can change some facilities of models or use crafted regularization terms.
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Decomposability </span>is to understand a model in terms of its components such as neurons, layers, blocks, and so on. Such a modularized analysis is quite popular in engineering fields. For instance, the inner working of a complicated system is factorized as a combination of functionalized modules. A myriad of engineering examples such as software development and optical system design have justified that a modularized analysis is effective. In machine learning, a decision tree is a kind of modularized methods, where each node has an explicit utility to judge if a discriminative condition is satisfied or not, each branch delivers an output of a judgement, and each leaf node represents the final decision after computing all attributes. Modularizing a neural network is advantageous to the optimization of the network design since we know the role of each and every component of the entire model.
              </li>
              <li style="margin-bottom: 10px">
                <span style="font-style: italic; font-weight: bold;">Algorithmic Transparency </span>is to understand the training process and dynamics of a model. The landscape of the objective function of a neural network is highly non-convex. The fact that deep models do not have a unique solution hurts the model transparency. Nevertheless, it is intriguing that
                current stochastic gradient descent (SGD)-based learning algorithms still perform efficiently and effectively. If we can understand why learning algorithms work, deep learning research and applications will be accelerated.
              </li>
            </ul>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Although different works may interpret neural networks from completely different perspectives, we can rate the interpretability of the involved algorithms in this system from the above three aspects.
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="scrollable" v-model="dialogVisible_atenhoc" style="width:30%; height:50%; text-align: center; overflow: auto;"
             :draggable="true" @close="dialogVisible_atenhoc = false" :append-to-body="true" title="可解释建模"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;可解释建模旨在模型构建的过程中加入固有的可解释性，消除了事后解释分析中不能保证忠诚度等局限性。尽管人们普遍认为可解释性和模型表达能力之间存在权衡，但仍有可能找到既强大又可解释的模型。可解释建模可以进一步分类为<span style="font-weight: bold;">可解释表征</span>和<span style="font-weight: bold;">模型改进</span>。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;<span style="font-weight: bold;">可解释表征</span>方法采用正则化技术，将神经网络的优化引导到更可解释的表征形式。使得网络可解释性更强的属性可以包括分解性、稀疏性和单调性等。因此，正则化特征成为可解释建模的一种方式。相应地，为了实现可解释性，网络必须显式或隐式地进行正则约束，从而限制原始模型执行完整的学习任务。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;<span style="font-weight: bold;">模型改进</span>方法通过设计和部署更容易解释的机制来寻求可解释性。这些机制包括具有特定设计激活函数的神经元、具有特殊功能的中间层、模块化的体系结构等。未来的发展方向是使用越来越多、越来越可解释的组件来构建神经网络，同时在各种任务现有技术水平性能的基础上实现可解释性。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;在该分类树中，我们没有将可解释建模分成可解释表征和模型改进这两类，因为一些工作可以同时包含这两项。但是对于每个具体的工作，我们可以说明它涉及到哪些方面。
            </div>
          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Ante-hoc interpretable modeling builds interpretable models, which eliminates the biases from the post-hoc interpretability analysis. Although it is generally believed that there is a trade-off between interpretability and model expressibility, it is still possible to find a model that is both powerful and interpretable. Ante-hoc interpretable modeling can be further categorized into interpretable representation and model renovation.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;<span style="font-weight: bold;">Interpretable representation</span> methods employ regularization techniques to steer the optimization of a neural network towards a more interpretable representation. Properties such as decomposability, sparsity, and monotonicity can enhance interpretability. As a result, regularized features become a way
              to allow more interpretable models. Correspondingly, the network must be explicitly or implicitly regularized, which restricts the original model to perform its full learning task.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;<span style="font-weight: bold;">Model renovation</span> methods seek interpretability by the means of designing and deploying more interpretable machineries into a network. Those machineries include a neuron with purposely designed activation function, an inserted layer with a special functionality, a modularized architecture, and so on. The future direction is to use more and more explainable components that can at the same time achieve similar state-of-the-art performance for diverse tasks.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;In this taxonomy tree, we did not separate ante-hoc modeling into interpretable representation and model renovation, since some works may involve both. However, for each specific work, we can specify which aspects it involves.
            </div>

            </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>


  <el-dialog class="scrollable" v-model="dialogVisible_posthoc" :style="'width:30%; height:' + (activeTab === 'cn' ? '42%' : '55%') + '; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_posthoc = false" :append-to-body="true" title="事后解释性分析"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;事后解释分析在模型学习完成后才进行，用于解释已有的模型，根据<el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">论文 1</el-link>，事后解释分析可以进一步分类为特征分析、模型检查、显著性分析、代理模型、高级数学/物理分析、基于案例的解释和基于文本的解释。但是我们的分类树不会展示得那么复杂，我们从更简单的方面进行了分类。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;事后解释方法的主要优点在于，不需要通过牺牲预测性能来获得可解释性，因为预测和解释是两个独立的过程，互不干扰。然而，事后解释通常不完全忠实于对原始模型。如果一个解释与原始模型相比是100％准确的，那么它便成为了原始模型。因此，事后解释中的任何方法都多多少少存在不准确性。更糟糕的是，我们经常不知道其中的微妙差别是从何而来。这使得从业人员难以完全信任事后解释方法，因为其正确性没有得到保证。
            </div>
            </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Post-hoc interpretability is conducted after a model is well learned, which explains existing models. According to <el-link href="https://arxiv.org/pdf/2001.02522" target="_blank" type="primary">paper 1</el-link>, post-hoc interpretability can be further classified into feature analysis, model inspection, saliency, proxy, advanced mathematical/physical analysis, explaining-by-case, and explaining-by-text, respectively.
              But our taxonomy tree is not organized in such a complex way. We classify these works based on simpler aspects.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;A main advantage of post-hoc methods is that one does not need to compromise interpretability with the predictive performance since prediction and interpretation are two separate processes without mutual interference. However, a post-hoc interpretation is usually not completely faithful to the original model. If an interpretation is 100% accurate compared to the original model, it becomes the original model. Therefore, any interpretation method in this category is more or less inaccurate. What is worse is that we often do not know the nuance. Such a nuance makes it hard for practitioners to have a full trust to an interpretation method, because the correctness of the interpretation method is not guaranteed.
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>


  <el-dialog class="scrollable" v-model="dialogVisible_local" :style="'width:30%; height:' + (activeTab === 'cn' ? '27%' : '31%') + '; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_local = false" :append-to-body="true" title="局部解释"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;局部解释表明这种方法致力于对每张具体的图像进行解释，但是不能解释某个特定的类别或整个数据集，也不能提供独立于数据的可解释性（如更透明的网络架构、推理模式等）。
            </div>

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Local explanation indicates that this approach is dedicated to explaining each individual image, but it cannot explain a specific class or the entire dataset, nor can it provide interpretability independent of the specific data (such as more transparent network architectures, inference patterns, etc.).
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="scrollable" v-model="dialogVisible_global" :style="'width:30%; height:' + (activeTab === 'cn' ? '29%' : '33%') + '; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_global = false" :append-to-body="true" title="全局解释"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;在这个分类系统中，我们对于全局解释的定义十分宽容。只要此方法除了解释某个特定图片外，还具有其他更普适一些的可解释性，我们就认为它具有一定的全局解释能力了。这种能力可以包括解释一个类别、一个数据集，或者是提供更容易分解的网络架构、更透明的推理模式等等。
            </div>

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;In this taxonomy tree, we have a broad definition of global explanation. As long as a method has other more general interpretability besides explaining a specific image, we consider it to have some degree of global interpretability. This ability can include explaining a class, a dataset, or providing more decomposable network architecture, more transparent inference patterns, etc.
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="scrollable" v-model="dialogVisible_attention" :style="'width:30%; height:50%; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_attention = false" :append-to-body="true" title="注意力机制"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;注意力机制（Attention Mechanism）起源于自然语言处理（NLP）领域，它的灵感来自于人类视觉系统的选择性注意能力。注意力机制在神经网络中的使用可以追溯到 2014 年左右，Bahdanau 等人在论文《Neural Machine Translation by Jointly Learning to Align and Translate》中提出了用于改进序列到序列（seq2seq）模型的注意力机制。大约在 2017 年，注意力机制开始大规模运用到NLP领域。这得益于 Vaswani 等人的开创性工作《Attention is All You Need》，他们提出了 Transformer 模型，该模型完全基于注意力机制而不再依赖传统的卷积神经网络（CNN）或循环神经网络（RNN）。而在2020年，Vision Transformer (ViT)被提出，这是Transformer最早应用于视觉任务的工作。ViT将图像分割成一系列固定大小的块，并将这些块变换成向量序列，然后使用Transformer模型来对这些向量进行处理，从而实现对图像的分类。ViT的成功启示了人们使用Transformer模型解决视觉任务的新思路，随后引发了一系列相关研究。
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/transformer.jpg']"
                :src="`http://10.214.242.155:7667/img/background/transformer.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;注意力机制自带一定的可解释性，通过注意力图表达。注意力图是注意力权重矩阵的可视化。在计算注意力图时，我们首先计算注意力权重。对于 Transformer 模型，我们将输入序列映射到 Query（Q）、Key（K）和 Value（V）向量。计算 Q 和 K 之间的点积（点积注意力），得到注意力分数。对分数应用 Softmax 函数，将分数转换为概率分布。这些概率就是注意力权重。使用注意力权重对 V 进行加权求和，得到注意力输出。
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/attention.jpg']"
                :src="`http://10.214.242.155:7667/img/background/attention.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;在计算注意力权重之后，我们可以将这些权重可视化为热力图或注意力图，进行解释工作。注意力图提供了一种直观的方式来理解模型是如何在输入序列的不同部分之间分配关注的。通过观察注意力图，我们可以发现模型在处理某个特定任务时，哪些部分更重要，哪些部分相对较不重要。例如，在自然语言处理任务中，注意力图可以揭示模型在翻译或摘要任务中关注的词汇或短语。在计算机视觉任务（如目标检测或图像分类）中，注意力图可以揭示模型在图像中关注的区域。注意力图可以帮助我们更好地理解模型的行为，提高模型的可解释性，并在某种程度上帮助我们找到潜在的问题和改进模型的方向。然而，值得注意的是，注意力图只是模型内部机制的一种近似可视化，可能并不能完全反映模型的真实行为。
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/attn.png']"
                :src="`http://10.214.242.155:7667/img/background/attn.png`"
            />

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;<strong>Attention Mechanism</strong> originated from the field of natural language processing (NLP) and was inspired by the selective attention ability of the human visual system. The use of attention mechanism in neural networks can be traced back to around 2014, when Bahdanau et al. proposed an attention mechanism to improve the sequence-to-sequence (seq2seq) model in their paper "Neural Machine Translation by Jointly Learning to Align and Translate". Attention mechanism began to be widely used in the field of NLP around 2017, thanks to the groundbreaking work "Attention is All You Need" by Vaswani et al. They proposed the Transformer model, which is completely based on attention mechanism and no longer relies on traditional convolutional neural networks (CNNs) or recurrent neural networks (RNNs). In 2020, the Vision Transformer (ViT) was introduced, which was the first work to apply the Transformer model to visual tasks. ViT divides the image into a series of fixed-size blocks, transforms these blocks into a sequence of vectors, and then uses the Transformer model to process these vectors for image classification. The success of ViT inspired a new approach for using Transformer models to solve visual tasks, which subsequently led to a series of related research.
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/transformer.jpg']"
                :src="`http://10.214.242.155:7667/img/background/transformer.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Attention mechanism has a certain degree of interpretability, expressed through attention maps. An attention map is the visualization of the attention weight matrix. When calculating the attention map, we first calculate the attention weight. For the Transformer model, we map the input sequence to Query (Q), Key (K) and Value (V) vectors. We calculate the dot product between Q and K (dot product attention) to obtain the attention score. The softmax function is applied to the scores to convert them into a probability distribution. These probabilities are the attention weights. We use the attention weights to weight V and obtain the attention output.
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/attention.jpg']"
                :src="`http://10.214.242.155:7667/img/background/attention.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;After calculating the attention weights, we can visualize them as heatmaps or attention maps to interpret the model. Attention maps provide an intuitive way to understand how the model allocates attention between different parts of the input sequence. By observing attention maps, we can identify which parts are more important and which are relatively less important when the model is processing a specific task. For example, in natural language processing tasks, attention maps can reveal the vocabulary or phrases the model focuses on in translation or summarization tasks. In computer vision tasks such as object detection or image classification, attention maps can reveal the regions of the image the model is paying attention to. Attention maps can help us better understand the behavior of the model, improve its interpretability, and to some extent, help us identify potential problems and improve the model. However, it should be noted that attention maps are only an approximate visualization of the internal mechanism of the model and may not fully reflect the true behavior of the model.
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/attn.png']"
                :src="`http://10.214.242.155:7667/img/background/attn.png`"
            />
          </el-tab-pane>

        </el-tabs>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="scrollable" v-model="dialogVisible_tree" :style="'width:30%; height:50%; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_tree = false" :append-to-body="true" title="神经树"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;神经树（Neural Trees，NTs）是将神经网络（NNs）和决策树（DTs）结合起来的一类方法，我们提出过一篇综述对其进行全面评估：<el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">a survey of neural trees</el-link>。
              我们的主要动机是探索这些方法如何增强模型的可解释性，并提出剩余的挑战和可能的解决方案。此外，我们还讨论了其他方面的考虑，例如条件计算和并行计算的冲突、该领域其他有前景的方向等。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;我们提出了一个详尽的神经树分类系统，其展示了神经网络和决策树的逐步融合和共同发展过程：
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/outline_survey.png']"
                :src="`http://10.214.242.155:7667/img/background/outline_survey.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;我们主要关注最后一类：神经决策树（Neural Decision Trees，NDTs），即同时符合决策树和神经网络定义的混合网络模型。其核心思想是通过使路由函数可微，
              从而使梯度下降法能够对这个混合模型进行优化。我们进一步将神经决策树分为以下几类：
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/NDT_hierarchy.png']"
                :src="`http://10.214.242.155:7667/img/background/NDT_hierarchy.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;更多详情请参考我们的综述（<el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">a survey of neural trees</el-link>）或github项目：<el-link href="https://github.com/zju-vipa/awesome-neural-trees" target="_blank" type="primary">github</el-link>。我们期待您的star或cite :)
            </div>

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Neural trees (NTs) refer to a school of methods that combine neural networks (NNs) and decision trees (DTs),
              for which we present a comprehensive review in this survey: <el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">a survey of neural trees</el-link>. Our keynote is to identify how these approaches enhance
              the model interpretability and suggest possible solutions to the remaining challenges. Besides, we provide a discussion
              about other considerations like conditional computation and promising directions towards this field, in hope to advance the practice of NTs.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;we present a thorough taxonomy for NTs that expresses the gradual integration and co-evolution of NNs and DTs:
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/outline_survey.png']"
                :src="`http://10.214.242.155:7667/img/background/outline_survey.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;We mainly focus on the last category: Neural Decision Trees (NDTs), which are hybrid NN models that meet the definitions of both decision trees and neural networks. Their core idea is to exploit NNs in the tree design by making the routing functions differentiable, thus allowing gradient descent-based methods to optimize. We further categorize NDTs as follows:
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/NDT_hierarchy.png']"
                :src="`http://10.214.242.155:7667/img/background/NDT_hierarchy.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;For more details, please refer to our survey (<el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">a survey of neural trees</el-link>) or github project: <el-link href="https://github.com/zju-vipa/awesome-neural-trees" target="_blank" type="primary">github</el-link>. We look forward to your star or site:)
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>


  <el-dialog class="scrollable" v-model="dialogVisible_intro_concept" :style="'width:30%; height:' + (activeTab === 'cn' ? '29%' : '35%') + '; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_intro_concept = false" :append-to-body="true" title="概念建模与推理"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;为了使模型的推理机制更加透明，一些方法将人类可理解的概念加入到了模型的预测过程中，这些概念可以是类别特定的原型（鸟的头部、斑马的条纹）、可以是抽象的模式关系（不同模式之间的关系和关系图谱），这些方法主要在算法透明度方面提升了模型的可解释性
            </div>

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;In order to make the reasoning mechanism of the model more transparent, some methods have incorporated human-comprehensible concepts into the model's inference process. These concepts can be category-specific prototypes (such as the head of a bird or the stripes of a zebra) or abstract pattern relationships (such as the relationships and graphs between different patterns). These methods mainly enhance the interpretability of the model in terms of algorithmic transparency.
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>


  <el-dialog class="scrollable" v-model="dialogVisible_intro_constituent" :style="'width:30%; height:50%; text-align: center; overflow: auto;'"
             :draggable="true" @close="dialogVisible_intro_constituent = false" :append-to-body="true" title="Constituent Attention(成分注意力)"  >
    <div class="dialog-container">
      <div class="language-switch">
        <el-tabs v-model="activeTab" type="border-card" class="demo-tabs" :stretch=true>
          <el-tab-pane label="中文" name="cn">

            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">可解释性分数:</span>
            </div>
            <div class="rating">
              <div class="row">
                <span style="font-weight: bold; margin-right: 5px;">可模拟性: </span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
              </div>
              <div class="row">
                <span style="font-weight: bold; margin-right: 5px;">可分解性: </span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
              </div>
              <div class="row">
                <span style="font-weight: bold; margin-right: 5px;">算法透明度: </span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
              </div>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">介绍:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;多头自注意力机制（MSA）赋予了 vision Transformer（ViT）建模token之间远程交互的能力。然而，过于自由的注意力机制使得token的信息分散到了与目标无关的依赖项中，阻碍了人们对ViT的理解，
              也不利于ViT的整体优化。<span style="font-style: italic; font-weight: bold;">成分注意力</span>（CA）旨在以微弱的开销解决不同ViT变体中的这些问题。CA通过将空间上可连接的token对聚集到同一组
              （即<span style="font-style: italic; font-weight: bold;">”成分“</span>）来促进它们之间的相互注意。
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent1.jpg']"
                :src="`http://10.214.242.155:7667/img/background/constituent1.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;此外，随着ViTs层数的增加，小的相邻成分会逐步合并成较大的成分，探索视觉目标中的层次结构。

            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent2.jpg']"
                :src="`http://10.214.242.155:7667/img/background/constituent2.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;CA从一个有趣的角度增强了ViT的可解释性，约束注意力头产生易于理解的行为和逐层推理过程。在原始的注意力机制中，所有token
              都参与到两两之间任意的注意力计算，产生了密集的注意力矩阵。此外，随着ViT的加深，注意力头的行为也会有很大的差异，可能会在不同的注意力层上集中
              于完全不同的部分。相反，CA施加了明确的空间约束，让每个token将注意力集中在其周围一个小的成分上，使注意力矩阵更加稀疏和易于解释。此外，
              每一层高度激活的部分将逐层进行合并。这种逐层推理的过程增强了每个中间层的功能明确性，提供了从输入到输出更清晰的说明。
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent3.png']"
                :src="`http://10.214.242.155:7667/img/background/constituent3.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              更多详情请参考原论文：
              <br>
              &emsp;&emsp;<el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">Constituent Attention for Vision Transformers</el-link>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">评价:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              这种方法属于可解释建模中的“可解释表征”方法，它采用正则化技术在可分解性和稀疏性方面增强了ViT模型的可解释性。其逐层推理的过程在一定程度上也提高了算法透明度。
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">尝试:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              抱歉，这种方法在本系统中尚未实现。
            </div>

          </el-tab-pane>
          <el-tab-pane label="English" name="en">
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">Rating on Interpretability:</span>
            </div>
            <div class="rating">
              <div class="row">
                  <span style="font-weight: bold; margin-right: 5px;">Simulatability: </span>
                  <span class="far fa-star"></span>
                  <span class="far fa-star"></span>
                  <span class="far fa-star"></span>
                  <span class="far fa-star"></span>
                  <span class="far fa-star"></span>
              </div>
              <div class="row">
                <span style="font-weight: bold; margin-right: 5px;">Decomposability: </span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
              </div>
              <div class="row">
                <span style="font-weight: bold; margin-right: 5px;">Algorithmic Transparency: </span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
              </div>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">Introduction:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Multi-head self-attention (MSA) endows vision Transformers (ViTs) with the ability of modelling long-range interactions between tokens.
              However, the arbitrary attention makes tokens distracted by extraneous dependencies, complicating the understanding of ViTs and hindering the
              overall optimization of ViTs. <span style="font-style: italic; font-weight: bold;">Constituent Attention</span> (CA) aims to resolve aforementioned issues in different
              variants of ViTs with negligible overhead. CA is designed to encourage the mutual attention between spatially connectable tokens via gathering
              such token pairs to the same group (termed <span style="font-style: italic; font-weight: bold;">constituent</span>).
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent1.jpg']"
                :src="`http://10.214.242.155:7667/img/background/constituent1.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;Furthermore, with the layers going deeper in ViTs, small adjacent constituents are gradually merged into larger ones, exploring hierarchical structures in the visual objectives.
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent2.jpg']"
                :src="`http://10.214.242.155:7667/img/background/constituent2.jpg`"
            />
            <div style="text-align: left; margin: 10px 0;">
              &emsp;&emsp;CA enhances the interpretability of ViTs from an intriguing angle, identifying both the amenable behavior of attention heads and the layer-wise reasoning process. In the original MSA, all the tokens participate in the attention computing arbitrarily, thus leading to dense attention matrices. Besides, with the deepening of ViTs, attention heads behave quite differently and are likely to focus on diverse parts in different layers. On the contrary, CA imposes an explicit spatial constraint, so that each token concentrates on a small constituent and attention matrices will be much sparser and easier to interpret. Besides, the activated parts will progress layer-wise and gradually get merged. The layer-wise reasoning process enhances the functionality of each intermediate layer and provides a clearer illustration from input to output.
            </div>
            <el-image
                style="width: 100%; height: 100%"
                :fit="'scale-down'"
                class="image"
                :preview-src-list="['http://10.214.242.155:7667/img/background/constituent3.png']"
                :src="`http://10.214.242.155:7667/img/background/constituent3.png`"
            />
            <div style="text-align: left; margin: 10px 0;">
              For more details, please refer to the original paper:
              <br>
              &emsp;&emsp;<el-link href="https://arxiv.org/abs/2209.03415" target="_blank" type="primary">Constituent Attention for Vision Transformers</el-link>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">Comments:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              This approach belongs to "interpretable representation methods" of the Ante-hoc modeling, which employs regularization techniques enhance the model interpretability
              in terms of decomposability and sparsity. Its layer-wise reasoning process also contributes to algorithmic transparency to some extent.
            </div>
            <div style="text-align: left; margin: 10px 0;">
              <span style="font-style: italic; font-weight: bold; font-size: 18px; color: #A88B17;">Try it:</span>
            </div>
            <div style="text-align: left; margin: 10px 0;">
              Sorry this method has not been implemented in this system.
            </div>
          </el-tab-pane>


        </el-tabs>
      </div>
    </div>
  </el-dialog>



</template>


<!--src="./script.js"-->
<script setup>

// import $ from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js'
// import * as d3 from 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
import $ from 'jquery'
import * as d3 from 'd3';
import { reactive, onMounted, ref } from "vue";
import '@fortawesome/fontawesome-free/css/all.css'

var nodes;
var dragStarted;
var domNode;
const dialogVisible = ref(false);
const dialogVisible_interp = ref(false);
const dialogVisible_atenhoc = ref(false);
const dialogVisible_posthoc = ref(false);
const dialogVisible_local = ref(false);
const dialogVisible_global = ref(false);
const dialogVisible_attention = ref(false);
const dialogVisible_tree = ref(false);
const dialogVisible_intro_concept = ref(false);
const dialogVisible_intro_constituent = ref(false);
// dialogVisible_global

const activeTab = ref('cn')

function showDialog() {
  console.log("进来了")
  dialogVisible.value = true;
}
function showDialog_interp() {
  // console.log("进来了")
  dialogVisible_interp.value = true;
}
function showDialog_atenhoc() {
  // console.log("进来了")
  dialogVisible_atenhoc.value = true;
}
function showDialog_posthoc() {
  // console.log("进来了")
  dialogVisible_posthoc.value = true;
}
function showDialog_local() {
  // console.log("进来了")
  dialogVisible_local.value = true;
}
function showDialog_global() {
  // console.log("进来了")
  dialogVisible_global.value = true;
}
function showDialog_attention() {
  // console.log("进来了")
  dialogVisible_attention.value = true;
}
function showDialog_tree() {
  // console.log("进来了")
  dialogVisible_tree.value = true;
}
function showDialog_intro_concept() {
  // console.log("进来了")
  dialogVisible_intro_concept.value = true;
}
function showDialog_intro_Constituent() {
  // console.log("进来了")
  dialogVisible_intro_constituent.value = true;
}




onMounted(() => {
  var json =
      {
        "name": "可解释性",
        "children": [{
          "name": "事后解释性分析",
          "children": [{
            "name": "局部解释",
            "size": 1616,
            "children": [{
              "name": "归因方法",
              "size": 1616,
              "children": [{
                "name": "基于梯度",
                "size": 1616,
                "children": [{
                  "name": "LayerGradCAM",
                  "size": 1616},
                  {
                    "name": "Saliency",
                    "size": 1616
                  },
                  {
                    "name": "Integrated Gradient",
                    "size": 1616
                  },
                  {
                    "name": "GradientShap",
                    "size": 1616
                  },
                  {
                    "name": "DeepLift",
                    "size": 1616
                  },
                  {
                    "name": "Occasion",
                    "size": 1616
                  }],
              },{
                "name": "基于消融扰动",
                "size": 1027,
                "children": [{
                  "name": "Feature Ablation",
                  "size": 9354
                }]
              }]
            }]
          }, {
            "name": "全局解释",
            "size": 1027,
            "children": [{
              "name": "代理模型",
              "size": 9354,
              "children": [{
                "name": "LIME",
                "size": 9354
              }]
            },{
              "name": "概念响应",
              "size": 9354,
              "children": [{
                "name": "TCAV",
                "size": 9354
              }]
            }]
          }]
        }, {
          "name": "可解释建模",
          "children": [{
            "name": "局部解释",
            "children": [{
              "name": "注意力机制",
              "size": 335,
              "children": [{
                "name": "Constituent Attention",
                "size": 2815
              }]
            }]
          },{
            "name": "全局解释",
            "size": 1027,
            "children": [{
              "name": "概念建模与推理",
              "size": 9354,
              "children": [{
                "name": "概念原型",
                "size": 9354,
                "children": [{
                  "name": "ProtoPNet",
                  "size": 9354,
                },{
                  "name": "ProtoPFormer",
                  "size": 9354,
                },{
                  "name": "ProtoTree",
                  "size": 9354
                },{
                  "name": "Dr. Huang",
                  "size": 9354,
                }]
              },{
                "name": "概念模式",
                "size": 1233,
                "children": [{
                  "name": "SchemaNet",
                  "size": 3165
                }]
              }]
            },{
              "name": "神经树",
              "size": 9354,
              "children": [{
                "name": "ProtoTree",
                "size": 9354
              }]
            }]
          }]
        }]
      };

  var treeData = json;
  var totalNodes = 0;
  var maxLabelLength = 0;
// variables for drag/drop
  var selectedNode = null;
  var draggingNode = null;
// panning variables
  var panSpeed = 200;
  var panBoundary = 20; // Within 20px from edges will pan when dragging.
// Misc. variables
  var i = 0;
  var duration = 750;
  var root;

// size of the diagram
  var viewerWidth = $(document).height();
  var viewerHeight = $(document).width();

  var tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);

// define a d3 diagonal projection for use by the node paths later on.
  var diagonal = d3.svg.diagonal()
      .projection(function(d) {
        return [d.y, d.x];
      });

// A recursive helper function for performing some setup by walking through all nodes

  function visit(parent, visitFn, childrenFn) {
    if (!parent) return;

    visitFn(parent);

    var children = childrenFn(parent);
    if (children) {
      var count = children.length;
      for (var i = 0; i < count; i++) {
        visit(children[i], visitFn, childrenFn);
      }
    }
  }

// Call visit function to establish maxLabelLength
  visit(treeData, function(d) {
    totalNodes++;
    maxLabelLength = Math.max(d.name.length, maxLabelLength);

  }, function(d) {
    return d.children && d.children.length > 0 ? d.children : null;
  });


// sort the tree according to the node names

  function sortTree() {
    console.log("执行了此函数")
    console.log(json)
    tree.sort(function(a, b) {
      return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
    });
  }
// Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

// TODO: Pan function, can be better implemented.

  function pan(domNode, direction) {
    var speed = panSpeed;
    if (panTimer) {
      clearTimeout(panTimer);
      var translateCoords = d3.transform(svgGroup.attr("transform"));
      if (direction == 'left' || direction == 'right') {
        var translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
        var translateY = translateCoords.translate[1];
      } else if (direction == 'up' || direction == 'down') {
        translateX = translateCoords.translate[0];
        translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
      }
      var scaleX = translateCoords.scale[0];
      var scaleY = translateCoords.scale[1];
      var scale = zoomListener.scale();
      svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
      d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
      zoomListener.scale(zoomListener.scale());
      zoomListener.translate([translateX, translateY]);
      var panTimer = setTimeout(function() {
        pan(domNode, speed, direction);
      }, 50);
    }
  }

// Define the zoom function for the zoomable tree

  function zoom() {
    // if (d3.event.sourceEvent.ctrlKey) {
    //   svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    // }

    svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }


// define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  const zoomListener = d3.behavior
      .zoom()
      .scaleExtent([0.1, 3])
      // .filter(function () {
      //   return d3.event.ctrlKey;
      // })
      .on("zoom", zoom);

  function initiateDrag(d, domNode) {
    draggingNode = d;
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
    d3.select(domNode).attr('class', 'node activeDrag');

    svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
      if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
      else return -1; // a is the hovered element, bring "a" to the front
    });
    // if nodes has children, remove the links and nodes
    if (nodes.length > 1) {
      // remove link paths
      var links = tree.links(nodes);
      var nodePaths = svgGroup.selectAll("path.link")
          .data(links, function(d) {
            return d.target.id;
          }).remove();
      // remove child nodes
      var nodesExit = svgGroup.selectAll("g.node")
          .data(nodes, function(d) {
            return d.id;
          }).filter(function(d, i) {
            if (d.id == draggingNode.id) {
              return false;
            }
            return true;
          }).remove();
    }

    // remove parent link
    var parentLink = tree.links(tree.nodes(draggingNode.parent));
    svgGroup.selectAll('path.link').filter(function(d, i) {
      if (d.target.id == draggingNode.id) {
        return true;
      }
      return false;
    }).remove();

    dragStarted = null;
  }


  // 选择tree-container元素
  const container = d3.select('#tree-container');

// 检查是否存在子元素，如果有则删除
  if (!container.empty()) {
    container.select('svg').remove();
  }

// define the baseSvg, attaching a class for styling and the zoomListener

  var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", viewerWidth)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
      .call(zoomListener);

  //
  // var baseSvg = d3.select("#tree-container").append("svg")
  //     .attr("width", viewerWidth)
  //     .attr("height", viewerHeight)
  //     .attr("class", "not-scaling")  // 设置为 "not-scaling"
  //     .call(zoomListener)
  //     .on("wheel.zoom", function(event) {
  //       if (event.ctrlKey) {
  //         event.preventDefault();
  //         zoomListener.scaleBy(d3.select(this), Math.pow(2, event.deltaY * 0.002));
  //       }
  //     });




//
//   // 添加提示信息
//   baseSvg.append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .text("这是一棵此系统所包含可解释性方法的分类树")
//       .attr("fill", "#333")
//       .attr("font-size", "14px")
//       .attr("font-weight", "bold");
//
//   baseSvg.append("text")
//       .attr("x", 10)
//       .attr("y", 45)
//       .text("Tips:")
//       .attr("fill", "#333")
//       .attr("font-size", "12px")
//       .attr("font-weight", "bold");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 65)
//       .text("1.拖动屏幕可以移动树")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 85)
//       .text("2.鼠标滚轮转动可以改变树的大小")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 105)
//       .text("3.左键单击节点可以收缩和扩张节点")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 125)
//       .text("4.右键单击节点可以查看详细介绍")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 145)
//       .text("5.拖动节点可以试图将方法分离出树，但是这不会成功")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
// // 添加按钮
//   var tooltipButton = baseSvg.append('g')
//       .attr('class', 'button-group')
//       .attr('transform', 'translate(10,180)');
//
//   tooltipButton.append('rect')
//       .attr('class', 'button-rect')
//       .attr('width', 150)
//       .attr('height', 30)
//       .attr('rx', 15)
//       .attr('ry', 15)
//       .attr('fill', '#409EFF')
//       .on('click', function() {
//         window.open('https://example.com/');
//       });
//
//   tooltipButton.append('text')
//       .attr('class', 'button-text')
//       .attr('x', 75)
//       .attr('y', 20)
//       .attr('text-anchor', 'middle')
//       .text('点击查看我们对于可解释性的评估标准')
//       .attr('fill', '#FFFFFF')
//       .attr('alignment-baseline', 'central');



// .attr("style", "background: url('@/assets/background.jpg');background-size: cover;")

// console.log("querySelector id: ", document.querySelector('#tree-container'));
// console.log("querySelector id2: ", document.querySelector('tree-container'));
// console.log("id: ", document.getElementById("tree-container"))
// console.log("d3.select: ", d3.select("#tree-container"))
// console.log("viewerWidth: ", viewerWidth)
// console.log("viewerHeight: ", viewerHeight)
// console.log("zoomListener: ", zoomListener)
  console.log("baseSvg: ", baseSvg)


// Define the drag listeners for drag/drop behaviour of nodes.
  var dragListener = d3.behavior.drag()
      .on("dragstart", function(d) {
        if (d == root) {
          return;
        }
        dragStarted = true;
        nodes = tree.nodes(d);
        d3.event.sourceEvent.stopPropagation();
        // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
      })
      .on("drag", function(d) {
        if (d == root) {
          return;
        }
        if (dragStarted) {
          domNode = this;
          initiateDrag(d, domNode);
        }

        // get coords of mouseEvent relative to svg container to allow for panning
        var relCoords = d3.mouse($('svg').get(0));
        if (relCoords[0] < panBoundary) {
          var panTimer = true;
          pan(this, 'left');
        } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

          panTimer = true;
          pan(this, 'right');
        } else if (relCoords[1] < panBoundary) {
          panTimer = true;
          pan(this, 'up');
        } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
          panTimer = true;
          pan(this, 'down');
        } else {
          try {
            clearTimeout(panTimer);
          } catch (e) {

          }
        }

        d.x0 += d3.event.dy;
        d.y0 += d3.event.dx;
        var node = d3.select(this);
        node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
        updateTempConnector();
      }).on("dragend", function(d) {
        if (d == root) {
          return;
        }
        domNode = this;
        if (selectedNode) {
          // now remove the element from the parent, and insert it into the new elements children
          var index = draggingNode.parent.children.indexOf(draggingNode);
          if (index > -1) {
            draggingNode.parent.children.splice(index, 1);
          }
          if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
            if (typeof selectedNode.children !== 'undefined') {
              selectedNode.children.push(draggingNode);
            } else {
              selectedNode._children.push(draggingNode);
            }
          } else {
            selectedNode.children = [];
            selectedNode.children.push(draggingNode);
          }
          // Make sure that the node being added to is expanded so user can see added node is correctly moved
          expand(selectedNode);
          sortTree();
          endDrag();
        } else {
          endDrag();
        }
      });

  function endDrag() {
    selectedNode = null;
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
    d3.select(domNode).attr('class', 'node');
    // now restore the mouseover event or we won't be able to drag a 2nd time
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
    updateTempConnector();
    if (draggingNode !== null) {
      update(root);
      centerNode(draggingNode);
      draggingNode = null;
    }
  }

// Helper functions for collapsing and expanding nodes.

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  function expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach(expand);
      d._children = null;
    }
  }

  var overCircle = function(d) {
    selectedNode = d;
    updateTempConnector();
  };
  var outCircle = function(d) {
    selectedNode = null;
    updateTempConnector();
  };

// Function to update the temporary connector indicating dragging affiliation
  var updateTempConnector = function() {
    var data = [];
    if (draggingNode !== null && selectedNode !== null) {
      // have to flip the source coordinates since we did this for the existing connectors on the original tree
      data = [{
        source: {
          x: selectedNode.y0,
          y: selectedNode.x0
        },
        target: {
          x: draggingNode.y0,
          y: draggingNode.x0
        }
      }];
    }
    var link = svgGroup.selectAll(".templink").data(data);

    link.enter().append("path")
        .attr("class", "templink")
        .attr("d", d3.svg.diagonal())
        .attr('pointer-events', 'none');

    link.attr("d", d3.svg.diagonal());

    link.exit().remove();
  };

// Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

  function centerNode(source) {
    var scale = zoomListener.scale();
    var x = -source.y0;
    var y = -source.x0;
    x = x * scale + viewerHeight / 40;
    y = y * scale + viewerHeight / 2;
    d3.select('g').transition()
        .duration(duration)
        .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
    zoomListener.scale(scale);
    zoomListener.translate([x, y]);
  }

// Toggle children function

  function toggleChildren(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }
/////////////////////////////////////////////////
///////////////// IMAGE DEFS ////////////////////
/////////////////////////////////////////////////

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "img1")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tool2.jpg")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 62);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "local")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/local2.jpg")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 40)
      .attr("height", 40);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "post-hoc")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/post-hoc.png")
      .attr("x", 0)
      .attr("y", 1)
      .attr("width", 40)
      .attr("height", 40);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "ad-hoc")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/ad-hoc.png")
      .attr("x", 0)
      .attr("y", -9)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "attention2")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/attention2.jpg")
      .attr("x", -5)
      .attr("y", -13)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "prototype")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/prototype.jpg")
      .attr("x", 0)
      .attr("y", -13)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "concept")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/concept.png")
      .attr("x", 2)
      .attr("y", 0)
      .attr("width", 40)
      .attr("height", 40);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "proxy")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/proxy.png")
      .attr("x", -8)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "disturbance")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/disturb.png")
      .attr("x", 3)
      .attr("y", 4)
      .attr("width", 35)
      .attr("height", 35);



  baseSvg.append('defs').append("pattern")
      .attr("id", "zebra")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/zebra.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "gradient2")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/gradient2.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);


  baseSvg.append('defs').append("pattern")
      .attr("id", "saliency")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/saliency.jpg")
      .attr("x", -10)
      .attr("y", -5)
      .attr("width", 60)
      .attr("height", 64);

  baseSvg.append('defs').append("pattern")
      .attr("id", "tcav")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tcav.jpg")
      .attr("x", -12)
      .attr("y", -3)
      .attr("width", 60)
      .attr("height",50);

  baseSvg.append('defs').append("pattern")
      .attr("id", "tree")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tree.jpg")
      .attr("x", 0)
      .attr("y", -8)
      .attr("width", 60)
      .attr("height",50);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "global2")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/global2.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 62);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "hl")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/hl.jpg")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "xmq")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/xmq.jpg")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "zhf")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/zhf.jpg")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 60);

  d3.select('svg').append('defs').append("pattern")
      .attr("id", "hqh")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/hqh.jpg")
      .attr("x", 0)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  console.log("d3.select('svg'):",d3.select('svg'))

  // d3.select('svg').append('defs')
  //     .append("pattern")
  //     .attr("id", "img1")
  //     .attr("patternUnits", "userSpaceOnUse") // 设置图案单位为用户坐标系统
  //     .attr("width", "100%") // 相对于用户坐标系，定义图像相对宽度为100%
  //     .attr("height", "100%") // 相对于用户坐标系，定义图像相对高度为100%
  //     .append("image")
  //     .attr("xlink:href", "http://10.214.242.155:7667/img/background/tool.jpg")
  //     .attr("x", 0)
  //     .attr("y", 0)
  //     .attr("width", "100%") // 图片元素实际宽度为100%用户坐标系统的宽度
  //     .attr("height", "100%"); // 图片元素实际高度为100%用户坐标系统的高度




// Toggle children on click.
  // click suppressed
  // var clicked = false;
  // var clickTimeout;

  // function click(d) {
  //   if (!clicked) {
  //     clicked = true;
  //
  //     // 使用setTiemout来等待300ms
  //     clickTimeout = setTimeout(function() {
  //       // 单击操作逻辑
  //       console.log("Single Click");
  //
  //       // 将clicked重置为false
  //       clicked = false;
  //     }, 300); // 等待300毫秒
  //
  //   } else {
  //     // 取消定时器
  //     clearTimeout(clickTimeout);
  //     clicked = false;
  //
  //     // 双击操作逻辑
  //     console.log("Double Click");
  //   }
  // }


  function click(d) {
    if (d3.event.defaultPrevented) return; // click suppressed
    d = toggleChildren(d);
    update(d);
    centerNode(d);
    // console.log("测试", d);
    // d3.event.stopPropagation();
  }

  function contextmenu(d) {
    event.preventDefault();
    console.log("d.name", d.name);
    if(d.name==="可解释性"){
      showDialog_interp();
    }if(d.name==="可解释建模"){
      showDialog_atenhoc();
    }if(d.name==="事后解释性分析"){
      showDialog_posthoc();
    }if(d.name==="局部解释"){
      showDialog_local();
    }if(d.name==="全局解释"){
      showDialog_global();
    }if(d.name==="注意力机制"){
      showDialog_attention();
    }if(d.name==="神经树"){
      showDialog_tree();
    }if(d.name==="引用概念"){
      showDialog_intro_concept();
    }if(d.name==="Constituent Attention"){
      showDialog_intro_Constituent();
    }
  }

  function update(source) {
    // Compute the new height, function counts total children of root node and sets tree height accordingly.
    // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
    // This makes the layout more consistent.
    var levelWidth = [1];
    var childCount = function(level, n) {

      if (n.children && n.children.length > 0) {
        if (levelWidth.length <= level + 1) levelWidth.push(0);

        levelWidth[level + 1] += n.children.length;
        n.children.forEach(function(d) {
          childCount(level + 1, d);
        });
      }
    };
    childCount(0, root);
    var newHeight = d3.max(levelWidth) * 105; // 25 pixels per line  /*<><><><><><><><><><><><><><><><><><><><><><><>THIS IS DETERMINING SPACING */
    tree = tree.size([newHeight, viewerWidth]);

    // Compute the new tree layout.
    nodes = tree.nodes(root).reverse();
    var links = tree.links(nodes);

    // Set widths between levels based on maxLabelLength.
    nodes.forEach(function(d) {
      d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
      // alternatively to keep a fixed scale one can set a fixed depth per level
      // Normalize for fixed-depth by commenting out below line
      // d.y = (d.depth * 500); //500px per level.
    });

    // Update the nodes…
    var node = svgGroup.selectAll("g.node")
        .data(nodes, function(d) {
          return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .call(dragListener)
        .attr("class", "node")
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', click)
        .on('contextmenu', contextmenu);
        // .on('dblclick', dblclick);

    nodeEnter.append("circle")
        .attr('class', 'nodeCircle')
        .attr("r", 0)
        .style("stroke", "black")
        .style("stroke-width", "1.5px")
        .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

    nodeEnter.append("text")
        .attr("x", function(d) {
          return d.children || d._children ? -10 : 10;
        })
        .attr("dy", ".35em")
        .attr('class', 'nodeText')
        .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
        })
        .attr("transform", function(d) {
          return d.children || d._children ? "rotate(-90)" : "rotate(-30)";
        })
        // .attr("transform", "rotate(-90)")
        .text(function(d) {
          return d.name;
        })
        .style("fill-opacity", 0)
        // .style("color", "black")
        .style("font-size", "16px");

    // phantom node to give us mouseover in a radius around it
    nodeEnter.append("circle")
        .attr('class', 'ghostCircle')
        .attr("r", 30)
        .attr("opacity", 0.2) // change this to zero to hide the target area
        .style("fill", "red")
        .attr('pointer-events', 'mouseover')
        .on("mouseover", function(node) {
          overCircle(node);
        })
        .on("mouseout", function(node) {
          outCircle(node);
        });

    // Update the text to reflect whether node has children or not.
    node.select('text')
        .attr("x", function(d) {
          return d.children || d._children ? d.name.length*10 : 30;
          // return d.children || d._children ? -30 : 30;
        })
        .attr("y", function(d) {
          return d.children || d._children ? -35 : 0;
        })
        .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function(d) {
          return d.name;
        });

    // Change the circle fill depending on whether it has children and is collapsed
    node.select("circle.nodeCircle")
        .attr("r", 20.5) /*<><><><><><><><><><><><><><><><><><><><><><><>THIS IS DETERMINING RADIUS */
        .style("fill", function(d) {
          console.log("d:",d)
          // console.log("d._children:",d._children)
          if(d.name==="Constituent Attention"){
            return d._children ? "lightsteelblue" : "url(#hl)";
          }else if(d.name==="ProtoPFormer"){
            return d._children ? "lightsteelblue" : "url(#xmq)";
          }else if(d.name==="SchemaNet"){
            return d._children ? "lightsteelblue" : "url(#zhf)";
          }else if(d.name==="Dr. Huang"){
            return d._children ? "lightsteelblue" : "url(#hqh)";
          }else if(d.name==="局部解释"){
            return d._children ? "lightsteelblue" : "url(#local)";
          }else if(d.name==="全局解释"){
            return d._children ? "lightsteelblue" : "url(#global2)";
          }else if(d.name==="事后解释性分析"){
            return d._children ? "lightsteelblue" : "url(#post-hoc)";
          }else if(d.name==="可解释建模"){
            return d._children ? "lightsteelblue" : "url(#ad-hoc)";
          }else if(d.name==="注意力机制"){
            return d._children ? "lightsteelblue" : "url(#attention2)";
          }else if(d.name==="神经树"){
            return d._children ? "lightsteelblue" : "url(#tree)";
          }else if(d.name==="概念响应"){
            return d._children ? "lightsteelblue" : "url(#tcav)";
          }else if(d.name==="归因方法"){
            return d._children ? "lightsteelblue" : "url(#saliency)";
          }else if(d.name==="概念原型"){
            return d._children ? "lightsteelblue" : "url(#prototype)";
          }else if(d.name==="概念模式"){
            return d._children ? "lightsteelblue" : "url(#concept)";
          }else if(d.name==="概念建模与推理"){
            return d._children ? "lightsteelblue" : "url(#zebra)";
          }else if(d.name==="代理模型"){
            return d._children ? "lightsteelblue" : "url(#proxy)";
          }else if(d.name==="基于梯度"){
            return d._children ? "lightsteelblue" : "url(#gradient2)";
          }else if(d.name==="基于消融扰动"){
            return d._children ? "lightsteelblue" : "url(#disturbance)";
          }





          else{
            return d._children ? "lightsteelblue" : "url(#img1)";
          }
        });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

    // Fade the text in
    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select("circle")
        .attr("r", 0);

    nodeExit.select("text")
        .style("fill-opacity", 0);

    // Update the links…
    var link = svgGroup.selectAll("path.link")
        .data(links, function(d) {
          return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = {
            x: source.x0,
            y: source.y0
          };
          return diagonal({
            source: o,
            target: o
          });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = {
            x: source.x,
            y: source.y
          };
          return diagonal({
            source: o,
            target: o
          });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

// Append a group which holds all nodes and which the zoom Listener can act upon.
  var svgGroup = baseSvg.append("g");

// Define the root
  root = treeData;
  root.x0 = viewerHeight / 2;
  root.y0 = 0;

// Layout the tree initially and center on the root node.
  update(root);
  centerNode(root);

  console.log("querySelector id: ", document.querySelector('#tree-container'));
  console.log("querySelector id2: ", document.querySelector('tree-container'));
});

// export default {
//   name: 'Algorithm',
//   // ...
// }
// require('@/pages/algorithmIntro/script.js')
// export default {
//
//   methods: {
//
//   },
//   mounted() {
//     const s = document.createElement('script');
//     s.type = 'module';
//     s.id = 'js1';
//     s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js';
//     document.body.appendChild(s);
//     const s2 = document.createElement('script');
//     s2.type = 'module';
//     s2.id = 'js2';
//     s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
//     document.body.appendChild(s2);
//     // const s3 = document.createElement('script');
//     // s3.type = 'module';
//     // s3.id = 'js3';
//     // s3.src = './src/pages/algorithmIntro/script.js';
//     // document.body.appendChild(s3);
//     // console.log(s)
//   },
//   destroyed() {
//     let s = document.getElementById("js1")
//     s.remove()
//     let s2 = document.getElementById("js2")
//     s2.remove()
//     // let s3 = document.getElementById("js3")
//     // s3.remove()
//   }
// }

// export default {
//   mounted() {
//     const script = document.createElement('script');
//     script.src = '/assets/script.js';
//     document.body.appendChild(script);
//   },
//   beforeDestroy() {
//     const scripts = document.querySelectorAll('script[src="/assets/script.js"]');
//     scripts.forEach((script) => {
//       document.body.removeChild(script);
//     });
//   },
// };

// onMounted(() => {
//   console.log("querySelector id: ", document.querySelector('#tree-container'));
//   console.log("querySelector id2: ", document.querySelector('tree-container'));
// });

</script>

<style scoped>
@import "./style.css";
/*@import "./all.css";*/

#tree-container {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  overflow-x: visible;
  overflow-y: visible;
  width: 100%;
}
.tree-wrapper {
  position: relative;
}

.intro {
  position: absolute;
  top: 10%;
  left: 5%;
  /*color: white;*/
  /*transform-origin: top right;*/
  /*transform: rotate(-90deg);*/
}
/*.text-component span {*/
/*  display: inline-block;*/
/*  transform-origin: center;*/
/*  transform: rotate(90deg);*/
/*}*/
.holly{
  /*background-image: url('http://10.214.242.155:7667/img/background/algorithm2.jpg');*/
  /*background-repeat: no-repeat;*/
  /*background-size: contain;*/
  background-color: white;
  overflow: visible;
  /*position: relative;*/
  /*background-position: center;*/
}
.rating {
  /*font-size: 18px;*/
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
/*.overlay{*/
/*  background: linear-gradient(transparent,#78E9E8 100%);*/
/*  !*width: 1863px;*!*/
/*  !*height: 961px;*!*/
/*  width: 100%;*/
/*  !*height: 100%;*!*/
/*  overflow-x: visible;*/
/*  overflow-y: visible;*/
/*  !*position: absolute;*!*/
/*  !*top: 0;*!*/
/*  !*left: 0;*!*/
/*  !*width: 100%;*!*/
/*  !*height: 100%;*!*/
/*}*/
</style>