import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

   gallery = [
  {
    id: 1,
    title: "Gym Workout",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
  },
  {
    id: 2,
    title: "Weight Training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
  },
  {
    id: 3,
    title: "Fitness Training",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800"
  },
  {
    id: 4,
    title: "Bodybuilding",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800"
  },
  {
    id: 5,
    title: "Cardio Workout",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
  },
  {
    id: 6,
    title: "Gym Equipment",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800"
  },
  {
    id: 7,
    title: "Bench Press",
    image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=800"
  },
  {
    id: 8,
    title: "Dumbbell Exercise",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800"
  },
  {
    id: 9,
    title: "CrossFit",
    image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800"
  },
  {
    id: 10,
    title: "Modern Gym",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800"
  },
  {
    id: 11,
    title: "Fitness Lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
  },
  {
    id: 12,
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800"
  }
];


}
