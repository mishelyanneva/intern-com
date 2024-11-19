import NavigationMenu from '@/components/ui/navigation-menu'  

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationMenu />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="py-12">
          <h1 className="text-4xl font-bold text-gray-900">Welcome</h1>
         
        </div>
      </div>
    </div>
  )
}