import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Blog {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  categoryLabel: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | null = null;
  blogId: string = '';

  // This should ideally come from a service or API
  allBlogs: Blog[] = [
    {
      id: 'future-of-ai-ml-software-development',
      category: 'ai',
      title: 'The Future of AI: How Machine Learning is Transforming Software Development',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing the way we build software.',
      author: 'Sarah Johnson',
      date: 'October 20, 2025',
      categoryLabel: 'AI & Machine Learning',
      image: '🤖',
      content: `<h2>Introduction</h2>
      <p>The landscape of software development is undergoing a revolutionary transformation, driven by advances in artificial intelligence and machine learning. This article explores how AI is reshaping the way we write, debug, and maintain code.</p>
      
      <h2>Automated Code Generation</h2>
      <p>AI-powered code generation tools like GitHub Copilot and ChatGPT have become indispensable for modern developers. These tools can generate boilerplate code, suggest implementations, and even write entire functions based on natural language descriptions.</p>
      
      <p>The impact extends beyond productivity. AI code generation is democratizing programming, allowing developers with different skill levels to create complex applications more efficiently.</p>
      
      <h2>Intelligent Debugging</h2>
      <p>Machine learning algorithms can now analyze code patterns and predict potential bugs before they cause issues. These intelligent debugging systems:</p>
      <ul>
        <li>Detect anomalies in code behavior</li>
        <li>Suggest fixes based on similar issues in codebases</li>
        <li>Automatically generate test cases</li>
        <li>Predict maintenance needs</li>
      </ul>
      
      <h2>Code Quality and Refactoring</h2>
      <p>AI systems can analyze code quality metrics and suggest improvements. They understand code context, identify technical debt, and recommend refactoring strategies that maintain functionality while improving maintainability.</p>
      
      <h2>The Future of Development</h2>
      <p>As AI continues to evolve, we're moving towards a future where developers work alongside AI as partners. The focus shifts from writing repetitive code to solving complex problems, designing architectures, and understanding business requirements.</p>
      
      <p>This transformation doesn't replace developers—it empowers them to focus on higher-level thinking, creativity, and strategic problem-solving that machines cannot replicate.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI and ML in software development is not just a trend—it's the future. Developers who embrace these tools and understand how to leverage them effectively will have a significant advantage in creating better software faster.</p>`
    },
    {
      id: 'react-19-new-features',
      category: 'webdev',
      title: 'React 19: What\'s New and Exciting',
      excerpt: 'Dive into the latest features of React 19, including improved server components, automatic batching, and new hooks that will make your development experience smoother.',
      author: 'Mike Chen',
      date: 'Oct 22, 2025',
      categoryLabel: 'Web Development',
      image: '⚛️',
      content: `<h2>Introduction</h2>
      <p>React 19 has arrived with a host of exciting new features and improvements that will revolutionize how we build React applications. In this comprehensive guide, we'll explore the major updates and how they can benefit your development workflow.</p>
      
      <h2>Improved Server Components</h2>
      <p>One of the most significant changes in React 19 is the enhanced support for Server Components. These components run exclusively on the server, allowing you to reduce the JavaScript bundle size sent to clients and improve initial page load times.</p>
      
      <p>The new server component API provides better type safety and developer experience. You can now use async/await directly in server components, making data fetching more intuitive and efficient.</p>
      
      <h2>Automatic Batching</h2>
      <p>React 19 introduces automatic batching improvements that work across more scenarios, including promises, timeouts, and native event handlers. This means better performance out of the box without additional configuration.</p>
      
      <p>With automatic batching, React groups multiple state updates into a single re-render, reducing the number of renders and improving application performance.</p>
      
      <h2>New Hooks</h2>
      <p>Several new hooks have been introduced to make common patterns easier:</p>
      <ul>
        <li><strong>useFormState</strong> - Simplified form state management</li>
        <li><strong>useOptimistic</strong> - Optimistic UI updates for better UX</li>
        <li><strong>useActionState</strong> - Better action state handling</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React 19 brings significant improvements that make React development more efficient and enjoyable. The new features focus on performance, developer experience, and modern web development practices. Start exploring these features today to take your React applications to the next level!</p>`
    },
    {
      id: 'modern-css-techniques-2025',
      category: 'webdev',
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Master the latest CSS features including container queries, cascade layers, and color functions. Learn how to create stunning designs with less code.',
      author: 'Emma Davis',
      date: 'Oct 21, 2025',
      categoryLabel: 'Web Development',
      image: '🎨',
      content: `<h2>Introduction</h2>
      <p>The CSS landscape continues to evolve rapidly, and 2025 brings powerful new features that enable us to create more flexible, maintainable, and beautiful designs. Let's explore the cutting-edge CSS techniques that are shaping modern web design.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries are a game-changer for responsive design. Unlike media queries that respond to viewport size, container queries allow elements to respond to their container's size. This enables truly component-based responsive design.</p>
      
      <p>With container queries, you can create components that adapt to their context, making your designs more modular and reusable across different layouts.</p>
      
      <h2>Cascade Layers</h2>
      <p>Cascade layers provide explicit control over the cascade, allowing you to organize and prioritize CSS rules in a predictable way. This is particularly useful for managing styles from multiple sources like frameworks, component libraries, and custom styles.</p>
      
      <p>By using @layer, you can define the order of precedence for your styles, making CSS maintenance much easier for large projects.</p>
      
      <h2>Color Functions</h2>
      <p>Modern CSS introduces new color functions like oklch() and oklab() that provide better color manipulation capabilities. These functions offer improved perceptual uniformity and more intuitive color adjustments.</p>
      
      <p>The new color spaces make it easier to create color palettes and ensure consistent contrast ratios for accessibility.</p>
      
      <h2>Conclusion</h2>
      <p>These modern CSS techniques represent the future of web design. By adopting container queries, cascade layers, and new color functions, you can create more maintainable, accessible, and visually stunning websites with less code.</p>`
    },
    {
      id: 'getting-started-neural-networks',
      category: 'ai',
      title: 'Getting Started with Neural Networks',
      excerpt: 'A beginner-friendly introduction to neural networks. Learn the fundamentals, build your first model, and understand how deep learning actually works.',
      author: 'Dr. Lisa Wang',
      date: 'Oct 18, 2025',
      categoryLabel: 'AI & Machine Learning',
      image: '🧠',
      content: `<h2>Introduction</h2>
      <p>Neural networks form the foundation of modern artificial intelligence and machine learning. This guide will help you understand the fundamentals and build your first neural network from scratch.</p>
      
      <h2>What Are Neural Networks?</h2>
      <p>Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers. Each connection has a weight that adjusts during training, allowing the network to learn patterns from data.</p>
      
      <p>The basic structure includes:</p>
      <ul>
        <li><strong>Input Layer</strong> - Receives the initial data</li>
        <li><strong>Hidden Layers</strong> - Process the data through weighted connections</li>
        <li><strong>Output Layer</strong> - Produces the final prediction or classification</li>
      </ul>
      
      <h2>How Neural Networks Learn</h2>
      <p>Neural networks learn through a process called backpropagation. During training, the network makes predictions, compares them to actual results, and adjusts its weights to minimize the error.</p>
      
      <p>The learning process involves:</p>
      <ol>
        <li>Forward propagation - Data flows through the network</li>
        <li>Loss calculation - Compare predictions with actual values</li>
        <li>Backpropagation - Update weights to reduce error</li>
        <li>Iteration - Repeat until the model converges</li>
      </ol>
      
      <h2>Building Your First Model</h2>
      <p>To build your first neural network, you'll need a framework like TensorFlow or PyTorch. Start with a simple classification problem like recognizing handwritten digits (MNIST dataset).</p>
      
      <p>Key steps include:</p>
      <ul>
        <li>Preparing and normalizing your data</li>
        <li>Defining the network architecture</li>
        <li>Choosing an appropriate loss function and optimizer</li>
        <li>Training the model on your dataset</li>
        <li>Evaluating and refining your model</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Neural networks are powerful tools for solving complex problems. By understanding the fundamentals and practicing with real projects, you can begin to harness the power of deep learning. Start simple, experiment, and gradually work your way up to more complex architectures.</p>`
    },
    {
      id: 'flutter-vs-react-native-2025',
      category: 'mobile',
      title: 'Flutter vs React Native: 2025 Comparison',
      excerpt: 'An in-depth comparison of the two leading cross-platform frameworks. Performance benchmarks, developer experience, and which one to choose for your project.',
      author: 'Sofia Martinez',
      date: 'Oct 16, 2025',
      categoryLabel: 'Mobile Development',
      image: '📱',
      content: `<h2>Introduction</h2>
      <p>When it comes to cross-platform mobile development, Flutter and React Native are the two most popular choices. This comprehensive comparison will help you decide which framework is right for your project in 2025.</p>
      
      <h2>Performance</h2>
      <p>Flutter compiles to native code, resulting in excellent performance. It uses its own rendering engine (Skia) which provides smooth animations and consistent UI across platforms.</p>
      
      <p>React Native uses a JavaScript bridge to communicate with native components. While this has improved significantly with recent updates, Flutter generally offers better performance, especially for complex animations and heavy computations.</p>
      
      <h2>Developer Experience</h2>
      <p>React Native leverages JavaScript/TypeScript and React, making it accessible to web developers. The development experience is familiar if you're already using React for web applications.</p>
      
      <p>Flutter uses Dart, which has a steeper learning curve but offers excellent tooling and hot reload capabilities. Flutter's widget system provides a highly consistent API across platforms.</p>
      
      <h2>Ecosystem and Community</h2>
      <p>React Native has a larger community and more third-party packages, thanks to its longer history and JavaScript ecosystem. You'll find solutions for most common problems.</p>
      
      <p>Flutter has a growing ecosystem with high-quality packages. Google's strong backing and active development ensure regular updates and new features.</p>
      
      <h2>UI/UX</h2>
      <p>Flutter provides pixel-perfect UI consistency across platforms with its own design system. It includes Material Design and Cupertino widgets out of the box.</p>
      
      <p>React Native renders native components, giving you platform-specific looks automatically. However, achieving pixel-perfect designs across platforms can be more challenging.</p>
      
      <h2>When to Choose What</h2>
      <p><strong>Choose React Native if:</strong></p>
      <ul>
        <li>Your team already knows JavaScript/React</li>
        <li>You need to share code with a web React application</li>
        <li>You prefer a larger ecosystem and community</li>
      </ul>
      
      <p><strong>Choose Flutter if:</strong></p>
      <ul>
        <li>Performance is critical</li>
        <li>You want pixel-perfect UI consistency</li>
        <li>You're building complex, animation-heavy apps</li>
        <li>You prefer a single codebase with minimal platform-specific code</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both frameworks are excellent choices for cross-platform development. React Native offers familiarity and ecosystem maturity, while Flutter provides superior performance and UI consistency. Your choice should depend on your team's expertise, project requirements, and long-term goals.</p>`
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id') || '';
      this.loadBlog();
    });
  }

  loadBlog(): void {
    this.blog = this.allBlogs.find(b => b.id === this.blogId) || null;
    
    if (!this.blog) {
      // Redirect to blogs page if blog not found
      this.router.navigate(['/blogs']);
    }
  }
}

