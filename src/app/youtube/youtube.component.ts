import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Video {
  category: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  date: string;
  categoryLabel: string;
}

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  selectedCategory = 'all';

  videos: Video[] = [
    {
      category: 'webdev',
      title: 'Complete React JS Course for Beginners 2025',
      description: 'Learn React from scratch with hooks, state management, and build real-world projects.',
      duration: '24:15',
      views: '125K',
      date: '2 weeks ago',
      categoryLabel: 'Web Development'
    },
    {
      category: 'webdev',
      title: 'CSS Grid & Flexbox - Master Responsive Design',
      description: 'Master modern CSS layouts and create stunning responsive websites.',
      duration: '18:42',
      views: '89K',
      date: '1 month ago',
      categoryLabel: 'Web Development'
    },
    {
      category: 'python',
      title: 'Python Programming Complete Bootcamp',
      description: 'Everything you need to know about Python from basics to advanced concepts.',
      duration: '45:30',
      views: '234K',
      date: '1 week ago',
      categoryLabel: 'Python'
    },
    {
      category: 'javascript',
      title: 'Modern JavaScript ES6+ Features Explained',
      description: 'Master modern JavaScript with arrow functions, destructuring, async/await and more.',
      duration: '22:10',
      views: '145K',
      date: '5 days ago',
      categoryLabel: 'JavaScript'
    }
  ];

  get filteredVideos(): Video[] {
    if (this.selectedCategory === 'all') {
      return this.videos;
    }
    return this.videos.filter(video => video.category === this.selectedCategory);
  }

  filterVideos(category: string) {
    this.selectedCategory = category;
  }
}

