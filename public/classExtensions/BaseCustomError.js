class BaseCustomError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  
    this.options = {
      code: 'UNDEFINED_ERROR',
      details: {},
      caller: null,
      ...options,
    }

        if (!options.caller) {
          try {
            // Use a function to capture caller information (e.g., using Error.captureStackTrace)
            const captureStackTrace = Error.captureStackTrace;
            if (captureStackTrace) {
              captureStackTrace(this, this.constructor);
            }
          } catch (error) {
            // Handle potential errors during caller information capture
            console.warn("Failed to capture caller information:", error);
          }
        }
  }
}
