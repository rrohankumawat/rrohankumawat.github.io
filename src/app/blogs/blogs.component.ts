import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Blog {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  categoryLabel: string;
  image: string;
}

interface FeaturedBlog {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  selectedCategory = 'all';
  searchQuery = '';

  featuredBlog: FeaturedBlog & { id: string } = {
    id: 'future-of-ai-ml-software-development',
    category: 'ai',
    title: 'The Future of AI: How Machine Learning is Transforming Software Development',
    description: 'Explore how artificial intelligence and machine learning are revolutionizing the way we build software. From automated code generation to intelligent debugging, discover the tools and techniques that are shaping the future of development.',
    author: 'Sarah Johnson',
    date: 'October 20, 2025',
    readTime: '12 min read'
  };

  blogs: Blog[] = [
    {
      id: 'react-19-new-features',
      category: 'webdev',
      title: 'React 19: What\'s New and Exciting',
      excerpt: 'Dive into the latest features of React 19, including improved server components, automatic batching, and new hooks that will make your development experience smoother.',
      author: 'Mike Chen',
      date: 'Oct 22, 2025',
      categoryLabel: 'Web Development',
      image: '⚛️'
    },
    {
      id: 'modern-css-techniques-2025',
      category: 'webdev',
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Master the latest CSS features including container queries, cascade layers, and color functions. Learn how to create stunning designs with less code.',
      author: 'Emma Davis',
      date: 'Oct 21, 2025',
      categoryLabel: 'Web Development',
      image: '🎨'
    },
    {
      id: 'getting-started-neural-networks',
      category: 'ai',
      title: 'Getting Started with Neural Networks',
      excerpt: 'A beginner-friendly introduction to neural networks. Learn the fundamentals, build your first model, and understand how deep learning actually works.',
      author: 'Dr. Lisa Wang',
      date: 'Oct 18, 2025',
      categoryLabel: 'AI & Machine Learning',
      image: '🧠'
    },
    {
      id: 'flutter-vs-react-native-2025',
      category: 'mobile',
      title: 'Flutter vs React Native: 2025 Comparison',
      excerpt: 'An in-depth comparison of the two leading cross-platform frameworks. Performance benchmarks, developer experience, and which one to choose for your project.',
      author: 'Sofia Martinez',
      date: 'Oct 16, 2025',
      categoryLabel: 'Mobile Development',
      image: '📱'
    }
  ];

  get filteredBlogs(): Blog[] {
    let filtered = this.blogs;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.categoryLabel.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  get shouldShowFeaturedBlog(): boolean {
    if (this.selectedCategory !== 'all' && this.featuredBlog.category !== this.selectedCategory) {
      return false;
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      return this.featuredBlog.title.toLowerCase().includes(query) ||
        this.featuredBlog.description.toLowerCase().includes(query) ||
        this.featuredBlog.author.toLowerCase().includes(query);
    }

    return true;
  }

  filterBlogs(category: string) {
    this.selectedCategory = category;
  }

  searchBlogs() {
    // Search filtering is handled by the getter
  }
}
