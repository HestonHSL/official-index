import { Icon } from 'umi';

export default function DocsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Icon Test Page</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="text-center p-4 border rounded">
          <Icon icon="mdi:rocket-launch" className="text-4xl text-blue-600 mb-2" />
          <p>Rocket</p>
        </div>

        <div className="text-center p-4 border rounded">
          <Icon icon="mdi:factory" className="text-4xl text-purple-600 mb-2" />
          <p>Factory</p>
        </div>

        <div className="text-center p-4 border rounded">
          <Icon icon="mdi:printer-3d" className="text-4xl text-green-600 mb-2" />
          <p>3D Printer</p>
        </div>

        <div className="text-center p-4 border rounded">
          <Icon icon="mdi:robot" className="text-4xl text-orange-600 mb-2" />
          <p>Robot</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Icons</h2>
        <p className="text-gray-600">
          You can search for more icons at: <a href="https://icones.js.org/collection/mdi" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://icones.js.org/collection/mdi</a>
        </p>
      </div>
    </div>
  );
}
