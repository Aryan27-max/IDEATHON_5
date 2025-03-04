import  { useState } from 'react';
import { Upload, FileText, User, ChevronRight } from 'lucide-react';

export default function AIAnalysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [result, setResult] = useState<null | {
    mutations: string[];
    recommendations: string[];
    riskLevel: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI analysis
    setResult({
      mutations: ['BRCA1', 'TP53'],
      recommendations: [
        'Consider PARP inhibitor therapy',
        'Regular monitoring recommended',
        'Genetic counseling advised'
      ],
      riskLevel: 'Moderate'
    });
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">AI Mutation Analysis</h1>
          <p className="mt-4 text-lg text-gray-600">Upload genomic data for instant AI-powered analysis</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  currentStep >= step ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`text-sm font-medium ${
                    currentStep >= step ? 'text-white' : 'text-gray-500'
                  }`}>{step}</span>
                </div>
                {step < 3 && (
                  <div className={`h-1 w-24 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <div className="grid grid-cols-3 gap-x-24 text-sm font-medium text-gray-500">
              <span>Upload Data</span>
              <span>Patient Info</span>
              <span>Results</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          {currentStep === 1 && (
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upload Genomic Data</h2>
                <p className="mt-1 text-sm text-gray-500">Upload .pdb files for analysis</p>
              </div>
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-12">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="button-primary cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                      Select File
                      <input id="file-upload" type="file" accept=".pdb" className="hidden" onChange={() => setCurrentStep(2)} />
                    </label>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">PDB files up to 50MB</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700">Patient Name</label>
                  <input
                    type="text"
                    id="patient-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    id="age"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="doctor-name" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
                  <input
                    type="text"
                    id="doctor-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="medical-history" className="block text-sm font-medium text-gray-700">Medical History</label>
                  <textarea
                    id="medical-history"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="button-primary w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  Analyze Data
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && result && (
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
                <p className="mt-1 text-sm text-gray-500">AI-generated insights and recommendations</p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Detected Mutations</h3>
                  <div className="mt-4 grid gap-4">
                    {result.mutations.map((mutation, i) => (
                      <div key={i} className="flex items-center rounded-lg bg-blue-50 p-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="ml-3 font-medium text-blue-900">{mutation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Risk Assessment</h3>
                  <div className="mt-4 rounded-lg bg-orange-50 p-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-orange-600" />
                      <span className="ml-3 font-medium text-orange-900">Risk Level: {result.riskLevel}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
                  <div className="mt-4 space-y-4">
                    {result.recommendations.map((rec, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-green-600" />
                        <span className="ml-3 text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="button-primary mt-8 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  Start New Analysis
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 