
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAIL_SERVICE_ID = 'service_tlgprgg';
  const EMAIL_PUBLIC_KEY = 'Xjn2qV2-DhlkdthrU';
  const EMAIL_TEMPLATE_ID = 'template_meeatxo';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Save message to database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save message');
      }

      // Try to send email notification (non-blocking)
      try {
        emailjs.init(EMAIL_PUBLIC_KEY);
        await emailjs.send(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'psairabel143@gmail.com',
          }
        );
        console.log('Email notification sent');
      } catch (emailError) {
        console.log('Email notification failed, but message was saved:', emailError);
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "psairabel143@gmail.com",
      link: "mailto:psairabel143@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9703288210",
      link: "tel:+919703288210",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/pallasivasai",
      link: "https://github.com/pallasivasai",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "p-siva-sai",
      link: "https://www.linkedin.com/in/p-siva-sai-10686417a/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Calendar size={24} />,
      label: "Schedule a Call",
      value: "Book a 30-min meeting",
      link: "https://calendly.com/psivasai/30min",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, 
                  challenging projects, and innovative ideas. Feel free to reach out!
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-200`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {contact.label}
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Additional Info */}
              <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Available for Opportunities</h4>
                <p className="text-white/90 leading-relaxed">
                  I'm currently seeking exciting opportunities in software development. 
                  Let's discuss how my skills can contribute to your team's success.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
