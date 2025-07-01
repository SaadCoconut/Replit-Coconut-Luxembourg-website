import { useState } from "react";
import { Hash, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SocialMediaWallProps {
  projectTitle: string;
  hashtags: string[];
}

// Mock social media posts - in a real implementation, these would come from actual social media APIs
interface SocialPost {
  id: string;
  platform: 'instagram' | 'twitter' | 'facebook' | 'linkedin';
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  hashtags: string[];
  image?: string;
}

const generateMockPosts = (hashtags: string[]): SocialPost[] => {
  const platforms: Array<'instagram' | 'twitter' | 'facebook' | 'linkedin'> = ['instagram', 'twitter', 'facebook', 'linkedin'];
  const authors = [
    'Youth_Leader_Alex', 'ErasmusStudent22', 'YouthWorker_Maria', 'DesignThinking_Pro',
    'CoconutParticipant', 'EuroMedYouth', 'Innovation_Hub', 'YouthEntrepreneur'
  ];
  
  const contentTemplates = [
    `Amazing experience with ${hashtags[0]} project! Learning so much about innovation and creativity 🚀`,
    `Day 3 of the training course and already applying design thinking methods! ${hashtags[0]} is life-changing`,
    `Networking with incredible young people from across Europe! Thank you ${hashtags[0]} for this opportunity`,
    `Presenting our project solutions today - proud of what we've achieved! ${hashtags[0]} ${hashtags[1] || ''}`,
    `The impact of non-formal education is real! This ${hashtags[0]} experience opened my mind to new possibilities`,
    `From idea to prototype in just 5 days! ${hashtags[0]} taught us that anything is possible with the right mindset`,
  ];

  const posts: SocialPost[] = [];
  const numberOfPosts = Math.min(12, contentTemplates.length);

  for (let i = 0; i < numberOfPosts; i++) {
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const content = contentTemplates[i % contentTemplates.length];
    
    posts.push({
      id: `post-${i}`,
      platform,
      author,
      content,
      timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      likes: Math.floor(Math.random() * 50) + 10,
      hashtags: hashtags.slice(0, Math.floor(Math.random() * 2) + 1),
      image: Math.random() > 0.6 ? `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300` : undefined
    });
  }

  return posts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'instagram': return 'bg-pink-500';
    case 'twitter': return 'bg-blue-400';
    case 'facebook': return 'bg-blue-600';
    case 'linkedin': return 'bg-blue-700';
    default: return 'bg-gray-500';
  }
};

const getPlatformName = (platform: string) => {
  switch (platform) {
    case 'instagram': return 'Instagram';
    case 'twitter': return 'Twitter';
    case 'facebook': return 'Facebook';
    case 'linkedin': return 'LinkedIn';
    default: return platform;
  }
};

export default function SocialMediaWall({ projectTitle, hashtags }: SocialMediaWallProps) {
  const [posts] = useState(() => generateMockPosts(hashtags));
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const filteredPosts = selectedPlatform === 'all' 
    ? posts 
    : posts.filter(post => post.platform === selectedPlatform);

  const platforms = Array.from(new Set(posts.map(post => post.platform)));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Hash className="h-6 w-6 text-[#8B4513]" />
          <h3 className="text-2xl font-bold text-gray-900">Social Media Activity</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Follow the conversation and see what participants are sharing about {projectTitle}
        </p>
        
        {/* Hashtag Display */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {hashtags.map((hashtag, index) => (
            <Badge key={index} variant="outline" className="text-[#8B4513] border-[#8B4513]">
              #{hashtag}
            </Badge>
          ))}
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button
            variant={selectedPlatform === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPlatform('all')}
            className={selectedPlatform === 'all' ? 'bg-[#8B4513] hover:bg-[#8B4513]/90' : ''}
          >
            All Platforms
          </Button>
          {platforms.map(platform => (
            <Button
              key={platform}
              variant={selectedPlatform === platform ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPlatform(platform)}
              className={selectedPlatform === platform ? `${getPlatformColor(platform)} hover:opacity-90` : ''}
            >
              {getPlatformName(platform)}
            </Button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getPlatformColor(post.platform)}`} />
                  <span className="font-medium text-sm">{post.author}</span>
                </div>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
            </CardHeader>
            <CardContent>
              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post content"
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
              )}
              <p className="text-sm text-gray-700 mb-3 line-clamp-3">{post.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.hashtags.map((hashtag, index) => (
                    <span key={index} className="text-xs text-[#8B4513]">
                      #{hashtag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>❤️ {post.likes}</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Hash className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No posts found for the selected platform.</p>
        </div>
      )}

      <div className="text-center">
        <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
          View More Posts
        </Button>
      </div>
    </div>
  );
}