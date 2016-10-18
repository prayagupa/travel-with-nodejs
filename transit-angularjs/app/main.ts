import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TransitAppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(TransitAppModule);
