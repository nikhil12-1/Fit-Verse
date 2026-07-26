import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(Auth);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call the backend login endpoint', () => {
    service.login('user@example.com', 'secret123').subscribe((response) => {
      expect(response).toEqual({ message: 'Login successful' });
    });

    const req = httpMock.expectOne('http://localhost:3000/user/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      email: 'user@example.com',
      password: 'secret123',
    });
    req.flush({ message: 'Login successful' });
  });
});
