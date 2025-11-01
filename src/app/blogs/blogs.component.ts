import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  selectedCategory = 'all';
  searchQuery = '';

  filterBlogs(category: string) {
    this.selectedCategory = category;
  }

  searchBlogs() {
    console.log('Searching for:', this.searchQuery);
  }
}
