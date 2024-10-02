// vite.config.js
import { ViteImageOptimizer } from "file:///C:/Users/aandr/Desktop/%D0%9C%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80/Website/intership/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///C:/Users/aandr/Desktop/%D0%9C%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80/Website/intership/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false,
                // https://github.com/svg/svgo/issues/1128
                cleanupIds: false
              }
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYW5kclxcXFxEZXNrdG9wXFxcXFx1MDQxQ1x1MDQzRVx1MDQzOSBcdTA0M0FcdTA0M0VcdTA0M0NcdTA0M0ZcdTA0NENcdTA0NEVcdTA0NDJcdTA0MzVcdTA0NDBcXFxcV2Vic2l0ZVxcXFxpbnRlcnNoaXBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFhbmRyXFxcXERlc2t0b3BcXFxcXHUwNDFDXHUwNDNFXHUwNDM5IFx1MDQzQVx1MDQzRVx1MDQzQ1x1MDQzRlx1MDQ0Q1x1MDQ0RVx1MDQ0Mlx1MDQzNVx1MDQ0MFxcXFxXZWJzaXRlXFxcXGludGVyc2hpcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWFuZHIvRGVza3RvcC8lRDAlOUMlRDAlQkUlRDAlQjklMjAlRDAlQkElRDAlQkUlRDAlQkMlRDAlQkYlRDElOEMlRDElOEUlRDElODIlRDAlQjUlRDElODAvV2Vic2l0ZS9pbnRlcnNoaXAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5pbXBvcnQgVml0ZVBsdWdpblN2Z1Nwcml0ZW1hcCBmcm9tICdAc3BpcmlpdC92aXRlLXBsdWdpbi1zdmctc3ByaXRlbWFwJztcclxuLy8gaW1wb3J0IHsgVml0ZU1pbmlmeVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1pbmlmeSc7XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWaXRlUGx1Z2luU3ZnU3ByaXRlbWFwKCdzb3VyY2UvaW1nL3Nwcml0ZS8qLnN2ZycsIHtcclxuICAgICAgc3R5bGVzOiBmYWxzZSxcclxuICAgICAgaW5qZWN0U1ZHT25EZXY6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIC8vIGlucHV0IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2h0bWwtbWluaWZpZXItdGVyc2VyIG9wdGlvbnNcclxuICAgIC8vIFZpdGVNaW5pZnlQbHVnaW4oe30pLFxyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgdGVzdDogL1xcLihqcGU/Z3xwbmd8c3ZnKSQvaSxcclxuICAgICAgaW5jbHVkZVB1YmxpYzogZmFsc2UsXHJcbiAgICAgIGxvZ1N0YXRzOiB0cnVlLFxyXG4gICAgICBhbnNpQ29sb3JzOiB0cnVlLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtdWx0aXBhc3M6IHRydWUsXHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncHJlc2V0LWRlZmF1bHQnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcclxuICAgICAgICAgICAgICAgIGNsZWFudXBOdW1lcmljVmFsdWVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRQYXRoRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdFByZWNpc2lvbjogMixcclxuICAgICAgICAgICAgICAgICAgZm9yY2VBYnNvbHV0ZVBhdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXplQWJzb2x1dGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVZpZXdCb3g6IGZhbHNlLCAvLyBodHRwczovL2dpdGh1Yi5jb20vc3ZnL3N2Z28vaXNzdWVzLzExMjhcclxuICAgICAgICAgICAgICAgIGNsZWFudXBJZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJ3JlbW92ZURpbWVuc2lvbnMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHBuZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNwbmdcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgICBwYWxldHRlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGpwZWc6IHtcclxuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICAgIHByb2dyZXNzaXZlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGpwZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXHJcbiAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgICAgcHJvZ3Jlc3NpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgLy8gQ2FjaGUgYXNzZXRzIGluIGNhY2hlTG9jYXRpb24uIFdoZW4gZW5hYmxlZCwgcmVhZHMgYW5kIHdyaXRlcyBhc3NldCBmaWxlcyB3aXRoIHRoZWlyIGhhc2ggc3VmZml4IGZyb20gdGhlIHNwZWNpZmllZCBwYXRoLlxyXG4gICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgY2FjaGVMb2NhdGlvbjogJy4vLmNhY2hlJyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWVcclxuICB9LFxyXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXHJcbiAgcm9vdDogJy4vc291cmNlJyxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgfSxcclxuICBiYXNlOiAnLi8nLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICB9XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ2EsU0FBUywwQkFBMEI7QUFDbmMsT0FBTyw0QkFBNEI7QUFJbkMsSUFBTyxzQkFBUTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ1AsdUJBQXVCLDJCQUEyQjtBQUFBLE1BQ2hELFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLElBQ2xCLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHRCxtQkFBbUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsUUFDSCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLGNBQ04sV0FBVztBQUFBLGdCQUNULHNCQUFzQjtBQUFBLGdCQUN0QixpQkFBaUI7QUFBQSxrQkFDZixnQkFBZ0I7QUFBQSxrQkFDaEIsbUJBQW1CO0FBQUEsa0JBQ25CLGlCQUFpQjtBQUFBLGdCQUNuQjtBQUFBLGdCQUNBLGVBQWU7QUFBQTtBQUFBLGdCQUNmLFlBQVk7QUFBQSxjQUNkO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQTtBQUFBLE1BRUEsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
