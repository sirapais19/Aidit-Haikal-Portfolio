
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash, Archive, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define message type
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'read' | 'unread' | 'archived';
}

const AdminMessages = () => {
  // Mock data for messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'Hi Aidit, I\'m interested in hiring you for a freelance Java project. Can we discuss the details?',
      timestamp: '2025-05-18T14:30:00',
      status: 'unread'
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      message: 'Hello! I saw your portfolio and I\'m impressed with your AI work. I would like to collaborate on a machine learning project.',
      timestamp: '2025-05-17T09:15:00',
      status: 'read'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      message: 'Hi, I need a library management system for my small business. Is this something you could help with? Please let me know your rates and availability.',
      timestamp: '2025-05-15T16:45:00',
      status: 'read'
    },
    {
      id: '4',
      name: 'Lisa Wong',
      email: 'lisa.wong@example.com',
      message: 'Greetings Aidit! I\'m a fellow CS student and I\'d love to connect and potentially collaborate on open-source projects. Let me know if you\'re interested!',
      timestamp: '2025-05-12T11:20:00',
      status: 'archived'
    }
  ]);

  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'unread' | 'read' | 'archived'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [viewMessageOpen, setViewMessageOpen] = useState(false);

  // Format timestamp to readable date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Handle viewing a message
  const viewMessage = (message: Message) => {
    if (message.status === 'unread') {
      // Mark as read when viewing
      const updatedMessages = messages.map(m => 
        m.id === message.id ? { ...m, status: 'read' as const } : m
      );
      setMessages(updatedMessages);
    }
    
    setSelectedMessage(message);
    setViewMessageOpen(true);
  };

  // Handle archiving a message
  const archiveMessage = (id: string) => {
    const updatedMessages = messages.map(message => 
      message.id === id ? { ...message, status: 'archived' as const } : message
    );
    
    setMessages(updatedMessages);
    if (selectedMessage?.id === id) {
      setViewMessageOpen(false);
      setSelectedMessage(null);
    }
    
    toast({
      title: "Message Archived",
      description: "The message has been moved to archives.",
    });
  };

  // Handle deleting a message
  const deleteMessage = (id: string) => {
    setMessages(messages.filter(message => message.id !== id));
    
    if (selectedMessage?.id === id) {
      setViewMessageOpen(false);
      setSelectedMessage(null);
    }
    
    toast({
      title: "Message Deleted",
      description: "The message has been permanently deleted.",
    });
  };

  // Filter messages based on selected filter
  const filteredMessages = messages.filter(message => {
    if (selectedFilter === 'all') return message.status !== 'archived';
    if (selectedFilter === 'archived') return message.status === 'archived';
    return message.status === selectedFilter;
  });

  // Count messages by status
  const unreadCount = messages.filter(m => m.status === 'unread').length;
  const readCount = messages.filter(m => m.status === 'read').length;
  const archivedCount = messages.filter(m => m.status === 'archived').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Messages</h2>
        
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('all')}
            className={selectedFilter === 'all' ? 'bg-purple' : 'border-white/20 text-white hover:bg-white/10'}
          >
            All ({unreadCount + readCount})
          </Button>
          <Button
            variant={selectedFilter === 'unread' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('unread')}
            className={selectedFilter === 'unread' ? 'bg-cyan' : 'border-white/20 text-white hover:bg-white/10'}
          >
            Unread ({unreadCount})
          </Button>
          <Button
            variant={selectedFilter === 'read' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('read')}
            className={selectedFilter === 'read' ? 'bg-purple' : 'border-white/20 text-white hover:bg-white/10'}
          >
            Read ({readCount})
          </Button>
          <Button
            variant={selectedFilter === 'archived' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('archived')}
            className={selectedFilter === 'archived' ? 'bg-purple' : 'border-white/20 text-white hover:bg-white/10'}
          >
            Archived ({archivedCount})
          </Button>
        </div>
      </div>
      
      {/* Messages Table */}
      <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="p-0">
          {filteredMessages.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Message</TableHead>
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => (
                  <TableRow 
                    key={message.id} 
                    className={`border-white/10 hover:bg-white/5 ${message.status === 'unread' ? 'bg-cyan/5' : ''}`}
                  >
                    <TableCell>
                      {message.status === 'unread' ? (
                        <Badge className="bg-cyan text-white">Unread</Badge>
                      ) : message.status === 'archived' ? (
                        <Badge className="bg-gray-500 text-white">Archived</Badge>
                      ) : (
                        <Badge className="bg-white/20 text-white">Read</Badge>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell className="max-w-[250px] truncate">
                      {message.message}
                    </TableCell>
                    <TableCell>{formatDate(message.timestamp)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => viewMessage(message)}
                          className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                          title="View Message"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        
                        {message.status !== 'archived' ? (
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => archiveMessage(message.id)}
                            className="h-8 w-8 text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10"
                            title="Archive Message"
                          >
                            <Archive className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                              const updatedMessages = messages.map(m => 
                                m.id === message.id ? { ...m, status: 'read' as const } : m
                              );
                              setMessages(updatedMessages);
                              toast({
                                title: "Message Restored",
                                description: "The message has been restored from archives.",
                              });
                            }}
                            className="h-8 w-8 text-gray-400 hover:text-cyan hover:bg-cyan/10"
                            title="Restore Message"
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        )}
                        
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => deleteMessage(message.id)}
                          className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                          title="Delete Message"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <Mail className="h-12 w-12 text-gray-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-200">No messages found</h3>
              <p className="text-gray-400 text-center mt-2">
                {selectedFilter === 'unread' 
                  ? "You have no unread messages." 
                  : selectedFilter === 'archived' 
                  ? "No messages have been archived." 
                  : "No messages match your current filter."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Message View Dialog */}
      <Dialog open={viewMessageOpen} onOpenChange={setViewMessageOpen}>
        <DialogContent className="bg-white/10 backdrop-blur-lg border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Message from {selectedMessage?.name}</DialogTitle>
            <DialogDescription className="text-gray-300">
              {selectedMessage?.email} • {selectedMessage && formatDate(selectedMessage.timestamp)}
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-white/5 p-4 rounded-md my-4 max-h-[300px] overflow-y-auto">
            {selectedMessage?.message.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-2 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          
          <DialogFooter className="flex gap-2 sm:justify-between">
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => {
                  window.location.href = `mailto:${selectedMessage?.email}`;
                }}
                className="border-cyan text-cyan hover:bg-cyan/10"
              >
                Reply via Email
              </Button>
            </div>
            
            <div className="flex gap-2">
              {selectedMessage?.status !== 'archived' && (
                <Button
                  variant="outline"
                  onClick={() => {
                    archiveMessage(selectedMessage?.id || '');
                    setViewMessageOpen(false);
                  }}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Archive className="mr-2 h-4 w-4" /> Archive
                </Button>
              )}
              
              <Button
                variant="destructive"
                onClick={() => {
                  deleteMessage(selectedMessage?.id || '');
                  setViewMessageOpen(false);
                }}
                className="bg-red-600/70 hover:bg-red-600"
              >
                <Trash className="mr-2 h-4 w-4" /> Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMessages;
