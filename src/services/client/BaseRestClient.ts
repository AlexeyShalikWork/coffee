type Either<R, E> = Success<R> | Failure<E>;
type Success<R> = { readonly success: true; readonly right: R };
type Failure<E> = { readonly success: false; readonly left: E };

const success = <R>(value?: R): Success<R> => {
  return { success: true, right: value };
}

const failure = <E>(value: E): Failure<E> => {
  return { success: false, left: value };
}

class BaseRestClient {
  public request = async <R, E>(url: string): Promise<Either<R, E>> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return success<R>(data)
    } catch (error) {
      console.error('NETWORK ERROR: ', error);
      // TODO something ...
      return failure<E>(error);
    }
  };

  public requestImage = async <E>(url: string): Promise<Either<Blob, E>> => {
    try {
      const response = await fetch(url);
      const data = await response.blob();
      return success<Blob>(data)
    } catch (error) {
      console.error('NETWORK ERROR: ', error);
      // TODO something ...
      return failure<E>(error);
    }
  };
}

export default BaseRestClient;
