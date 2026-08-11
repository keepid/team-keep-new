import { useState } from 'react'
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api'

const PHILADELPHIA_CENTER = { lat: 39.9526, lng: -75.1652 }

// Add or update partner and library locations here.
const locations = [
  {
    name: 'Why Not Prosper',
    type: 'Partner',
    address: '717 E Chelten Ave, Philadelphia, PA 19144',
    position: { lat: 40.0448173, lng: -75.1684041 },
  },
  {
    name: 'Face to Face Germantown',
    type: 'Partner',
    address: '109 E Price St, Philadelphia, PA 19144',
    position: { lat: 40.0384351, lng: -75.1767899 },
  },
  {
    name: 'Parkway Central Library',
    type: 'Library',
    address: '1901 Vine St, Philadelphia, PA 19103',
    position: { lat: 39.9595688, lng: -75.1736194 },
  },
  {
    name: 'South Philadelphia Library',
    type: 'Library',
    address: '1700 S Broad St, Philadelphia, PA 19145',
    position: { lat: 39.9291474, lng: -75.1716576 },
  },
  {
    name: 'Walnut Street West Library',
    type: 'Library',
    address: '201 S 40th St, Philadelphia, PA 19104',
    position: { lat: 39.9537939, lng: -75.2023845 },
  },
  {
    name: 'McPherson Square Library',
    type: 'Library',
    address: '601 E Indiana Ave, Philadelphia, PA 19134',
    position: { lat: 39.994827, lng: -75.1214498 },
  },
  {
    name: 'Nicetown-Tioga Library',
    type: 'Library',
    address: '3720 N Broad St, Philadelphia, PA 19140',
    position: { lat: 40.0099815, lng: -75.1539891 },
  },
  {
    name: 'Northeast Regional Library',
    type: 'Library',
    address: '2228 Cottman Ave, Philadelphia, PA 19149',
    position: { lat: 40.0481325, lng: -75.0640666 },
  },
]

const mapOptions = {
  clickableIcons: false,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
}

export function CommunityMap() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const apiKey = 'AIzaSyChzn2pZqOxrpuHhFo20bbKi0Aw6gDdgXU'
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'team-keep-google-map',
    googleMapsApiKey: apiKey,
  })

  return (
    <section
      id="community-map"
      aria-label="Partner and library locations"
      className="mt-10 w-full sm:mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-6 pb-6 text-sm font-medium text-blue-900">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-purple-primary" />
            Nonprofit partners
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-secondary" />
            Libraries
          </span>
        </div>
        <div className="w-full overflow-hidden bg-white shadow-xl ring-1 ring-black/5">
          {!apiKey || loadError ? (
            <div className="flex h-[32rem] items-center justify-center px-6 text-center">
              <div className="max-w-lg">
                <p className="font-display text-2xl font-medium text-blue-900">
                  The community map needs a Google Maps API key.
                </p>
                <p className="mt-3 text-grey-dark">
                  Add a browser key as{' '}
                  <code className="rounded bg-gray-100 px-1.5 py-1 text-sm">
                    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                  </code>{' '}
                  and restart the development server.
                </p>
              </div>
            </div>
          ) : !isLoaded ? (
            <div
              className="flex h-[32rem] items-center justify-center text-grey-dark"
              role="status"
            >
              Loading community map…
            </div>
          ) : (
            <GoogleMap
              center={PHILADELPHIA_CENTER}
              zoom={11.26}
              mapContainerStyle={{ width: '100%', height: '32rem' }}
              options={mapOptions}
            >
              {locations.map((location) => (
                <MarkerF
                  key={location.name}
                  position={location.position}
                  title={location.name}
                  onClick={() => setSelectedLocation(location)}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillColor:
                      location.type === 'Partner' ? '#445FEB' : '#F9C784',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 3,
                    scale: 10,
                  }}
                />
              ))}

              {selectedLocation && (
                <InfoWindowF
                  position={selectedLocation.position}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div className="max-w-[14rem] pr-2">
                    <p className="font-semibold text-gray-900">
                      {selectedLocation.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {selectedLocation.address}
                    </p>
                  </div>
                </InfoWindowF>
              )}
            </GoogleMap>
          )}
        </div>
      </div>
    </section>
  )
}
